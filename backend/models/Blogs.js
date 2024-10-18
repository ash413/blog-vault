const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String
})

module.exports = mongoose.model('Blogs', BlogSchema)