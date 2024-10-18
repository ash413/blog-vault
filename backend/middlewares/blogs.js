const Blogs = require('../db/db');

const BlogMiddleware = (req, res, next) => {
    const title = req.params.title;

    Blogs.findOne({
        title: title
    }).then((value) => {
        if(value){
            next();
        } else{
            res.status(403).json({
                msg: "Blog not found!"
            });
        }
    }).catch(err => {
        res.json(500).json({
            msg: "Server error!!"
        });
    })
}

module.exports = BlogMiddleware;