const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./db/db');

connectDB();

const app = express();
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');


app.use(bodyParser.json())
app.use("/user", userRoutes);
app.use("/blogs", blogRoutes);


const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})