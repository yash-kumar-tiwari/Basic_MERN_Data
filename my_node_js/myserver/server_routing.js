// url routing

import * as http from 'http';

http.createServer((req,res)=>{
    var msg;

    if(req.url=="/")
    msg="Home Page Invoked";
    else if (req.url=="/about")
    msg="About Page Invoked";
    else if (req.url=="/contact")
    msg="Contact Page Invoked";
    else if (req.url=="/service")
    msg="Service Page Invoked";
    else if (req.url=="/login")
    msg="Login Page Invoked";
    else
    msg="Invalid Url Invoked & Please Try Again";

    res.write("<h1>"+msg+"</h1>");
    res.end();

}).listen(8081);

console.log("Server Created and Initiated at Port Given 8081");