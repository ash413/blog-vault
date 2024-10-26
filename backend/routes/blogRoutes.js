const express = require('express');
const {Blogs} = require('../middlewares/blogs');
const AuthMiddleware = require('../middlewares/auth');

const router = express.Router();

router.post('/newBlog', AuthMiddleware, async (req,res) => {
    const {title, content} = req.body;
    const author = req.user.username;
    const newBlog = new Blogs({title, author, content});

    try{
        await newBlog.save();
        res.status(201).json({
            msg: "Blog Created!",
            blog: newBlog
        })
    } catch(err) {
        res.status(500).json({
            msg: "Error creating blog!"
        });
    }
})

router.get('/allBlogs', async (req, res) => {
    try{
        const blogs = await Blogs.find();
        res.status(200).json(blogs)
    } catch(err){
        res.status(500).json({
            msg: "Unable to fetch blogs"
        })
    }
})

router.get('/existingBlogs/:title', async(req, res) => {
    const title = req.params.title;
    try {
        const blogs = await Blogs.findOne({ title });
        if(blogs){
            res.status(200).json(blogs)
        } else{
            res.status(404).json({
                msg: "Blog not found!"
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: "Error fetching blog!"
        })
    }
})

module.exports = router;