const jwt = require("jsonwebtoken");

const jwtPassword = process.env.JWT_PASSWORD;

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const tokenArr = req.headers['authorization'].split(' ');
    const token = tokenArr[1];
    if (!token) {
        return res.status(404).send("Authorization token missing!!");
    }
    const verifiedToken = jwt.verify(token, jwtPassword);
    if (!verifiedToken) {
        return res.status(404).send("Invalid token!!");
    }
    req.username = jwt.decode(token).username;

    next();
}

module.exports = userMiddleware;