const koa = require('koa');
const koaRouter = require('koa-router');
require('dotenv').config();

const app = new koa();

const router = new koaRouter();

// Router Middleware
app.use(router.routes()).use(router.allowedMethods());



app.listen(process.env.PORT, () => console.log(`Server Started on Port: ${process.env.PORT}`))