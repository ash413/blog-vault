const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb+srv://vaishnavikadam4:2pAV27ljcUndlI6X@cluster0.kjzh0qo.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connection established!');
}).catch((err)=> {
    console.log('Connection error!', err);
})

module.exports = connection;