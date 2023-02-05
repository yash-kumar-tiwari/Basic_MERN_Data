import express from 'express';

const app = express();

app.get("/", (req,res)=>{
    res.send("<h1>Welcome to Express Server");
});

app.post("/", (req,res)=>{
    res.send("<h1>Welcome to Express Server");
});

app.get("/service", (req,res)=>{
    res.send("<h1>Welcome to Express Server... Service Page ");
});

app.listen(3000);

console.log("Server Invoked at link http://localhost:3000");