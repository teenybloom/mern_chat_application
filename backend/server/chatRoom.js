module.exports = () =>{

    const chatroomUsers = new Map()

    let chatHistory = []

    addChatroomUser = (socket) => {
        chatroomUsers.set(socket.id, socket);
    };

    deletChatroomUser = (socket) =>{
        chatroomUsers.delete(socket.id)
    }

    addMessage = (msg) => {
        chatHistory = chatHistory.concat(msg)
    };

    broadcastMessages = (msg) => {
        chatroomUsers.map(user => user.emit('message', msg))
    };
}



