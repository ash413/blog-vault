const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String
})

module.exports = mongoose.model('Blogs', BlogSchema)