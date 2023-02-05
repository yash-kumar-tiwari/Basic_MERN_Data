import express from 'express';

const app = express();

app.get("/", (req,res)=>{
    res.send("<h1>Welcome to Express Server");
});

app.listen(3000);

console.log("Server Invoked at link http://localhost:3000");