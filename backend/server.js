require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const socketIO = require('socket.io');
const mongoose = require('mongoose');


const app = new Koa();
const router = new Router();
const io = socketIO(app)



// Router Middleware
app.use(router.routes()).use(router.allowedMethods());


// Connect to Database
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_PATH}`, { useNewUrlParser: true})
    .then(result => console.log('Database Connected...'))
    .catch(err => {throw err})


router.get('/', (ctx, next) => {ctx.body = 'Hello World'})
    
io.on('connection', (socket) => {
    console.log("a user connected.")
});

app.listen(process.env.PORT, () => console.log(`Server Started on Port: ${process.env.PORT}`))