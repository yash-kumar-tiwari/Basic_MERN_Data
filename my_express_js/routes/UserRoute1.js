import express from 'express';

const router = express.Router();

router.get("/", (req,res)=>{
    res.render("userpages/userhome");});

router.get("/cpuser", (req,res)=>{
    res.render("userpages/cpuser");});

router.get("/epuser", (req,res)=>{
    res.render("userpages/epuser");});

router.get("/logout", (req,res)=>{
    res.render("userpages/logout");
});


export default router;