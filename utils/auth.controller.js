const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

var ctrl = {};

ctrl.isLoggedIn = async (req, res, next) => {
    if (req.headers.token === undefined || req.headers.token === null) {
        res.status(403).end();
    } else {
        try {
            const decoded = await jwt.verify(req.headers.token, process.env.JWT_SECRET);
            next();
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = ctrl;
