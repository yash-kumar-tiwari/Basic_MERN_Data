import express from 'express';

const router = express.Router();

router.get("/", (req,res)=>{
    res.render("adminpages/adminhome");
});

router.get("/cpadmin", (req,res)=>{
    res.render("adminpages/cpadmin");
});

router.get("/epadmin", (req,res)=>{
    res.render("adminpages/epadmin");
});

router.get("/manageuser", (req,res)=>{
    res.render("adminpages/manageuser");
});

router.get("/logout", (req,res)=>{
    res.render("adminpages/logout");
});


export default router;