const express = require('express');

/*const app = express()
app.use(express.json())*/

const router = express.Router()

router.post('/newBlog', (req, res) => {

})

router.get('/existingBlog', (req, res) => {
    title: req.params.title;
    author: req.params.author;
    content: req.params.content
})


module.exports = router;