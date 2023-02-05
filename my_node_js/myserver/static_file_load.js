import * as http from 'http';
import * as url from 'url';
import * as fs from 'fs';
import * as path from 'path';


const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

http.createServer((req,res)=>{
    if(req.url==="/")
    {
        fs.readFile("./views/home.html",(err,html)=>{
            res.writeHead(200, {"Content-Type":"text/html"});
            res.end(html);
        });
    }
    else if(req.url.match("\.css$"))
    {
        var cssPath = path.join(__dirname, 'public', req.url);
        var filestream = fs.createReadStream(cssPath,);
        res.writeHead(200, {"Content-Type":"text/css"});
        filestream.pipe(res);
    }
    // else if(req.url.match("\.jpg$"))
    // {
    //     var imagePath = path.join(__dirname, 'public', req.url);
    //     var filestream = fs.createReadStream(imagePath);
    //     res.writeHead(200, {"Content-Type":"image/jpg"});
    //     filestream.pipe(res);
    // }
    else 
    {
        res.writeHead(404, {"Content-Type":"text/html"});
        res.end("No Page Found");
    }
    
}).listen(8081);

console.log("Server Invoked at Link http://localhost:8081");