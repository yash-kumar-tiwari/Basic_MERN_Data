// url routing - as per url path

import * as http from 'http';
import * as url from 'url';

var url_route="<h1>Click Below Links to redirect</h1><br/><br/> <a href='/'>Home Page</a><br/><br/> <a href='/about'>About Page</a><br/><br/> <a href='/contact'>Contact Page</a><br/><br/> <a href='/service'>Service Page</a><br/><br/> <a href='/register'>Register Page</a><br/><br/> <a href='/login'>Login Page</a>"

http.createServer((req,res)=>{
    var urlobj = url.parse(req.url, true);

    var msg;

    if(urlobj.pathname=="/")
    msg="/ or Home Page Invoked";
    else if(urlobj.pathname=="/about")
    msg="/about Page Invoked";
    else if(urlobj.pathname=="/contact")
    msg="/contact Page Invoked";
    else if(urlobj.pathname=="/service")
    {
        if(req.method=="GET")
        msg="/service Page Invoked... Method GET";
        else if(req.method=="POST")
        msg="/service Page Invoked... Method POST";
        else if(req.method=="PUT")
        msg="/service Page Invoked... Method PUT";
        else if(req.method=="DELETE")
        msg="/service Page Invoked... Method DELETE";
        else
        msg="/service Page Invoked... Method Anonymous";
    }
    else if(urlobj.pathname=="/register")
    msg="/register Page Invoked";
    else if(urlobj.pathname=="/login")
    {
        var unm=urlobj.query.usernm;
        var pass=urlobj.query.upass;
        msg="/login Page Invoked and Username:"+unm+" Password:"+pass;
    }
    else 
    msg="invalid url invoked";

    res.write("<h1>"+msg+"</h1>"+url_route);
    res.end();

}).listen(8081);
console.log("Server Port 8081....");