const { Router } = require("express");
const jwt = require('jsonwebtoken');
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

const jwtPassword = process.env.JWT_PASSWORD;

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    try {
        const { username, password } = req.body;
        Admin.create({
            username,
            password,
        });

        const token = jwt.sign({ username }, jwtPassword);

        return res.status(201).json({
            message: 'Admin created successfully',
            token,
        });
    } catch (error) {
        return res.status(404).send(String(error));
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    try {
        const { title, description, price, imageLink } = req.body;
        const course = await Course.create({
            title,
            description,
            price,
            imageLink
        });
        const courseId = course._id;
        return res.status(201).json({
            message: 'Course created successfully',
            courseId,
        });
    } catch (error) {
        return res.status(404).send(String(error));
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try {
        const courses = await Course.find();
        return res.status(200).json({
            courses,
        });
    } catch (error) {
        return res.status(404).send(String(error));
    }
});

module.exports = router;