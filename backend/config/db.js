require('dotenv').config()
const mongoose = require('mongoose');

const db_url = process.env.MONGO_URL;

const connection = mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connection established!');
}).catch((err)=> {
    console.log('Connection error!', err);
})

module.exports = connection;