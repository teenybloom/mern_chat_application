const Chatroom = require('./chatRoom');


module.exports = () =>{

    const availableRooms = ['Crustaceans', 'Marine Mammals', 'Ocean Fishes']

    const chatrooms = new Map(availableRooms.map(room => [room, Chatroom(room)]));

    getChatroom = (roomName) =>{
        return chatrooms.get(roomName);
    };

    removeUser = (socket) => {
        chatrooms.map(client => client.removeUser(client));
    };

    return {
        getChatroom,
        removeUser
    }
}