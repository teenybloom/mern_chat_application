const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    Event_Type: String,
    Socket_ID: String,
    IP_Address: String,
    Connection_Date: String,
},{timestamps: {createdAt: 'created_at'}});

module.exports = mongoose.model('connection_log', logSchema)