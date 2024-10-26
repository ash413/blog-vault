const {Blogs} = require('../db/db');

const BlogMiddleware = (req, res, next) => {
    const title = req.params.title;

    Blogs.findOne({
        title: title
    }).then((value) => {
        if(value){
            next();
        } else{
            return res.status(403).json({
                msg: "Blog not found!"
            });
        }
    }).catch(err => {
        return res.status(500).json({
            msg: "Server error!!"
        });
    })
}

module.exports = BlogMiddleware;