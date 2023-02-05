import express from 'express';
import * as url from 'url'; 

const app = express();

app.get("/", (req,res)=>{
    res.send("<h1>/ or /home url invoked </h1>");
});

app.get("/about", (req,res)=>{
    res.send("<h1>/about url invoked </h1>");
});

app.get("/contact", (req,res)=>{
    res.send("<h1>/contact url invoked </h1>");
});

app.get("/register", (req,res)=>{
    res.send("<h1>/register url invoked </h1>");
});

app.get("/service", (req,res)=>{
    res.send("<h1>/service url invoked, GET Method </h1>");
});

app.post("/service", (req,res)=>{
    res.send("<h1>/service url invoked, POST Method  </h1>");
});

app.put("/service", (req,res)=>{
    res.send("<h1>/service url invoked, PUT Method  </h1>");
});

app.delete("/service", (req,res)=>{
    res.send("<h1>/service url invoked, DELETE Method  </h1>");
});

// app.all("/service",(req,res)=>{
//     res.send("<h1>/service url invoked, All Method</h1>")
// });

app.get("/login", (req,res)=>{
    res.send("<h1>/login url invoked</h1>")

    // var userDetails = url.parse(req.url, true).query;
    // console.log(userDetails);
    // res.send("<h1>/login url invoked</h1><h2>username: "+userDetails.username+"</h2><h2>password: "+userDetails.password+"</h2>");
});

app.listen(3000);

console.log("Server Invoked at link http://localhost:3000");