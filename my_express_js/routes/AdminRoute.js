import express from 'express';

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("<h1>/adminhome invoked, Admin Route</h1>");
});

router.get("/cpadmin", (req,res)=>{
    res.send("<h1>/cpadmin invoked, Admin Route</h1>");
});

router.get("/epadmin", (req,res)=>{
    res.send("<h1>/epadmin invoked, Admin Route</h1>");
});

router.get("/manageuser", (req,res)=>{
    res.send("<h1>/manageuser invoked, Admin Route</h1>");
});

router.get("/logout", (req,res)=>{
    res.send("<h1>/logout invoked, Admin Route</h1>");
});


export default router;