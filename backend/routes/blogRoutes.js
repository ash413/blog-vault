const express = require('express');

/*const app = express()
app.use(express.json())*/

const router = express.Router()

router.post('/newBlog', (req, res) => {

})

router.get('/existingBlog', (req, res) => {
    title: req.body.title;
    author: req.body.author;
    content: req.body.content
})


module.exports = router;