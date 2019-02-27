"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const socketIO = require("socket.io");
const mongoose = require("mongoose");
require('dotenv').config();
const app = new Koa();
const router = new Router();
const io = socketIO(app);
// Router Middleware
app.use(router.routes()).use(router.allowedMethods());
// Connect to Database
mongoose.connect(process.env.DATABASE_CONNECTION, (err, db) => {
    if (err)
        throw err;
    console.log('MongoDB Connected...');
});
io.on('connection', (socket) => {
    console.log("a user connected.");
});
app.listen(process.env.PORT, () => console.log(`Server Started on Port: ${process.env.PORT}`));
