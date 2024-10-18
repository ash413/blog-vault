const express = require('express');
const bodyParser = require('body-parser');
/*const connectDB = require('./config/db');*/

const app = express();

const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

/*app.use(express.json())*/
app.use(bodyParser.json())
app.use("/user", userRoutes);


const PORT = process.env.port || 5000
app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})