require('dotenv').config();
const app = require('express')();
const server = require('http').Server(app)
const io = require('socket.io')(server);
const mongoose = require('mongoose');
const cors = require('cors')

const chatroom = require('./chatRoom');
const roomManager = require('./roomManager');


// Router Middleware
app.use(cors({origin:'*'}))


// Connect to Database
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_PATH}`, { useNewUrlParser: true})
    .then(
        io.on('connection', (socket) => {
            console.log(`user ${socket.id} connected`);

            socket.on('disconnect', (socket) => {
                socket.disconnect(true)
                console.log(`User ${socket.id} has disconnected`)
            });
        })

        
    )
    .catch(err => {throw err})


server.listen(process.env.PORT, () => console.log(`Server Started on Port: ${process.env.PORT}`))