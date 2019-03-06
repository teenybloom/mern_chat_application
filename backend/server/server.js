require('dotenv').config();
const app = require('express')();
const server = require('http').Server(app)
const io = require('socket.io')(server);
const mongoose = require('mongoose');
const cors = require('cors')

const chatroom = require('./chatRoom');
const roomManager = require('./roomManager');
const connection_log = require('../models/log')

// Router Middleware
app.use(cors({origin:'*'}))


// Connect to Database
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_PATH}`, { useNewUrlParser: true})
    .then(
        io.on('connection', (socket) => {

            // Save connection log
            console.log(`user ${socket.id} connected`);
            let newConnection_log = new connection_log(
                {
                    Event_Type: 'connection',
                    Socket_ID: socket.id,
                    IP_Address: `${socket.request.connection.remoteAddress}:${socket.request.connection.remotePort}`,
                    Connection_Date: new Date()
                });

            newConnection_log.save( (err) =>{
                if(err) console.log(err);
            });


            socket.join('')

            socket.on('disconnect', (socket) => {
            
                console.log(`User ${socket.id} has disconnected`)
            });
        })

        
    )
    .catch(err => {throw err})


server.listen(process.env.PORT, () => console.log(`Server Started on Port: ${process.env.PORT}`))