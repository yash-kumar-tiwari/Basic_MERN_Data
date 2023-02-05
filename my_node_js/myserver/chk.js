// url routing - as per url path

import * as http from 'http';
import * as url from 'url';

http.createServer((req, res)=>{
    var urlobj= url.parse(req.url, true);
    console.log(urlobj);

    
    res.end();

}).listen(8081);

console.log("Server Port 8081....");