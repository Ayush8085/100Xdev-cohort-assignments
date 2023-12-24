const { Router } = require("express");
const router = Router();
const jwt = require('jsonwebtoken');
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

const jwtPassword = process.env.JWT_PASSWORD;

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    try {
        const { username, password } = req.body;
        User.create({
            username,
            password,
        });

        const token = jwt.sign({ username }, jwtPassword);

        return res.status(201).json({
            message: 'User created successfully',
            token,
        });
    } catch (error) {
        return res.status(404).send(String(error));
    }
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    try {
        const courses = await Course.find();
        return res.status(200).json({
            courses,
        });
    } catch (error) {
        return res.status(404).send(String(error));
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try {
        const courseId = req.params.courseId;
        const courseExists = await Course.findById(courseId);
        if (!courseExists) {
            return res.status(404).send("No course found with this Id");
        }

        const username = req.username;
        await User.findOneAndUpdate(
            { username },
            { $push: { purchasedCourses: courseId } },
            { new: true },
        );

        return res.status(200).json({
            message: 'Course purchased successfully',
        });
    } catch (error) {
        return res.status(404).send(String(error));
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try {
        const username = req.username;
        const purchasedCourses = await User.findOne({ username });
        return res.status(200).json({
            purchasedCourses: purchasedCourses.purchasedCourses,
        });
    } catch (error) {
        return res.status(404).send(String(error));
    }
});

module.exports = router;