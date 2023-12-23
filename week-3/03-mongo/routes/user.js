const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    try {
        User.create({
            username: req.body.username,
            password: req.body.password,
        });
        res.status(201).json({
            message: 'User created successfully',
        });
    } catch (error) {
        res.status(404).send(String(error));
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        const courses = await Course.find();
        if (!courses) {
            return res.status(200).json({
                message: "Sorry there are no courses yet!!",
            });
        }
        return res.status(200).json({
            courses,
        })
    } catch (error) {
        res.status(404).send(String(error));
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try {
        const { username, password } = req.headers;
        const courseId = req.params.courseId;
        await User.findOneAndUpdate(
            { username, password },
            { $push: { purchasedCourses: String(courseId) } },
            { new: true },
        );
        return res.status(201).json({
            message: 'Course purchased successfully'
        });
    } catch (error) {
        res.status(404).send(String(error));
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try {
        const { username, password } = req.headers;
        const purchasedCourses = await User.findOne({ username, password });
        return res.status(200).json({
            purchasedCourses: purchasedCourses.purchasedCourses,
        });
    } catch (error) {
        res.status(404).send(String(error));
    }
});

module.exports = router;