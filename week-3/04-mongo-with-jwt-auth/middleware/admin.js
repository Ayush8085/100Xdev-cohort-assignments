const jwt = require('jsonwebtoken');

const jwtPassword = process.env.JWT_PASSWORD;

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const tokenArr = req.headers['authorization'].split(' ');
    const token = tokenArr[1];
    if (!token) {
        return res.status(404).send("Authorization token missing!!");
    }
    const verifiedToken = jwt.verify(token, jwtPassword);
    if (!verifiedToken) {
        return res.status(404).send("Invalid token!!");
    }

    next();
}

module.exports = adminMiddleware;