require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const db_uri = process.env.MONGO_URI;
        await mongoose.connect(db_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully!');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit the process with failure
    }
}; 

console.log(process.env.MONGO_URI)

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
    Blogs,
    connectDB
}