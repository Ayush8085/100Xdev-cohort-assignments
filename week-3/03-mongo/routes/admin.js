const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try {
        Admin.create({
            username: req.body.username,
            password: req.body.password,
        });
        res.status(201).json({
            message: 'Admin created successfully',
        });
    } catch (error) {
        res.status(404).send(String(error));
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    try {
        const { title, description, price, imageLink } = req.body;
        const createdCourse = await Course.create({
            title,
            description,
            price,
            imageLink,
        });
        const courseId = createdCourse._id;
        res.status(201).json({
            message: 'Course created successfully',
            courseId,
        })
    } catch (error) {
        res.status(404).send(String(error));
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        const courses = await Course.find();
        res.status(200).json({
            courses,
        })
    } catch (error) {
        res.status(404).send(String(error));
    }
});

module.exports = router;