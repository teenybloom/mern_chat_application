import Koa = require('koa');
import Router = require('koa-router');
import socketIO = require('socket.io');
import mongoose = require('mongoose');
require('dotenv').config();


const app = new Koa();
const router = new Router();
const io = socketIO(app)

// Router Middleware
app.use(router.routes()).use(router.allowedMethods());

// Connect to Database
mongoose.connect(`mongodb://${process.env.DB_USEr}:${process.env.DB_PASSWORD}${process.env.DB_PATH}`, { useNewUrlParser: true})
    .then(result => console.log('Database Connected...'))
    .catch(err => {throw err})

io.on('connection', (socket: any) =>{
    console.log("a user connected.")
});

app.listen(process.env.PORT, () => console.log(`Server Started on Port: ${process.env.PORT}`))