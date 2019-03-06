const mongoose = require('mongoose');

const userChatLogSchema = new mongoose.Schema({
    Sender: String,
    Sender_SocketID: String,
    Recievers: [],
    Message: String,
    Sender_IP: String,
    Date: String
});

module.exports = mongoose.model('userChatLog', userChatLogSchema);