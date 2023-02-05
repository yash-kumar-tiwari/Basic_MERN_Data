import express, { Router } from 'express';

const app = express();

// Application Level Middeleware for all routes

app.use((req,res,next)=>{
    console.log("Application Level MiddleWare Invoked");
    next();
});

// app.use("/", (req, res)=>{
//     console.log("Application Level MiddleWare Invoked");
// next();
// });

// Application Level MiddleWare for Specific routes

app.use("/about", (req,res,next)=>{
    console.log("Application Level Middleware Invoked");
    next();
});

app.get("/", (req,res)=>{
    res.send("<h1>/ or /home url invoked</h1>");
});

app.get("/about", (req,res)=>{
    res.send("<h1>/about url invoked</h1>");
});

app.listen(3000);

console.log("Server Invoked at Link http://localhost:3000");
