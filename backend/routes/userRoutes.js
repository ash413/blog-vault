const express = require('express');
const Users = require('../db/db');
const jwt = require('jsonwebtoken');
const UserMiddleware = require('../middlewares/users');

const router = express.Router()

router.post('/login', UserMiddleware, (req, res) => {
    const username = req.headers.username;
    const token = jwt.sign({username: username}, process.env.JWT_SECRET, {expiresIn: '1h'});
    res.status(200).json({
        msg: "Logged in successfully!",
        token
    });
})

module.exports = router;