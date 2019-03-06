const io = require('socket.io-client');

const socket = io('http://localhost:3030');

function registerUser(name){
    socket.emit('register', name);
}

function joinRoom(roomName){
    socket.emit('join', roomName)
}

function sendMessage(msg, roomName){
    socket.emit('message', { roomName, message: msg})
}

function getChatrooms(roomName){
    socket.emit('rooms')
}

module.exports = {
    registerUser,
    joinRoom,
    sendMessage,
    getChatrooms
}