import express from 'express';

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("<h1>/homeuser invoked, User Route</h1>");
});

router.get("/cpuser", (req,res)=>{
    res.send("<h1>/cpuser invoked, User Route</h1>");
});

router.get("/epuser", (req,res)=>{
    res.send("<h1>/epuser invoked, User Route</h1>");
});

router.get("/logout", (req,res)=>{
    res.send("<h1>/logout invoked, User Route</h1>");
});


export default router;