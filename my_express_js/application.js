import express from 'express';

const app = express();

//application level url routes

import index from './routes/IndexRoute.js';
import admin from './routes/AdminRoute.js';
import user from './routes/UserRoute.js';

//route level middleware

app.use("/admin", admin);
app.use("/user", user);
app.use("/", index);

app.listen(3000);

console.log("Server Invoked at link http://localhost:3000");