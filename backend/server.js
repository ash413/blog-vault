const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.use(express.json())



const PORT = process.env.port || 5000
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})