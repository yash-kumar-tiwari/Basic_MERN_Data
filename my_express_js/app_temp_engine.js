import express from 'express';
// import * as url from 'url';
// import * as path from 'path';

const app = express();


// configuration for template pages and template engines
app.set("view engine", "ejs");
app.set("views", "./views");

//application level url routes

import index from './routes/IndexRoute1.js';
import admin from './routes/AdminRoute1.js';
import user from './routes/UserRoute1.js';

//route level middleware

app.use("/admin", admin);
app.use("/user", user);
app.use("/", index);

app.listen(3000);

console.log("Server Invoked at link http://localhost:3000");