const { Users } = require('../db/db');

const UserMiddleware = (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;
    /*const email = req.headers.email;*/

    Users.findOne({
        username: username,
        password: password
    }).then((value) => {
        if(value){
            next();
        } else{
            return res.status(403).json({
                msg: "User doesn't exist!"
            })
        }
    }).catch(err => {
        return res.status(500).json({
            msg: "Server error!!"
        });
    })
}

module.exports = UserMiddleware;