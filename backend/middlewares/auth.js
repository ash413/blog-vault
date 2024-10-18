const jwt = require('jsonwebtoken');

const AuthMiddleware = (req, res, next) => {
    const token = req.headers.['authorization']?.split(' ')[1];

    if(!token){
        res.status(401).json({
            msg: "No token provided!"
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
            res.status(403).json({
                msg: "Token invalid!"
            })
        }
        req.user = user;
        next();
    })
}

module.exports = AuthMiddleware;