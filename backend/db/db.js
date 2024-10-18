require('dotenv').config();
const mongoose = require('mongoose');

const db_url = process.env.MONGO_URL;

mongoose.connect(db_url);

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

const BlogSchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String
});

const Users = mongoose.model('Users', UserSchema);
const Blogs = mongoose.model('Blogs', BlogSchema);


/*const connection = mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connection established!');
}).catch((err)=> {
    console.log('Connection error!', err);
    process.exit(1);
})*/

module.exports = {
    Users,
    Blogs
}