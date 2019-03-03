//Require Mongoose
const mongoose = require('mongoose');

//define Schema
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    messages: {
        timestamp: Date,
        room: String,
        message: String
    }
 });

 module.exports = mongoose.model('userModel', userSchema);