import express from 'express';

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("<h1>/ or /home invoked, Visitor Route</h1>");
});

router.get("/about", (req,res)=>{
    res.send("<h1>/about invoked, Visitor Route</h1>");
});

router.get("/contact", (req,res)=>{
    res.send("<h1>/contact invoked, Visitor Route</h1>");
});

router.get("/service", (req,res)=>{
    res.send("<h1>/service invoked, Visitor Route</h1>");
});

router.get("/register", (req,res)=>{
    res.send("<h1>/register invoked, Visitor Route</h1>");
});

router.get("/login", (req,res)=>{
    res.send("<h1>/login invoked, Visitor Route</h1>");
});

export default router;