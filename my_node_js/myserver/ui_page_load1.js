// UI page load

import * as http from 'http';
import * as fs from 'fs';

http.createServer((req,res)=>{
    var data = fs.readFileSync("./views/home.html")
        res.write(data);
        res.end();
}).listen(8081);

console.log("Server Invoked at Port http://localhost:8081");