const http=require('http');
const path=require('path');
const fs=require('fs');
//const fact= require("/home.html");
const server=http.createServer((req,res)=>{
    if(req.url='/'){
        fs.readFile(`${__dirname}/home.html`,"utf-8",(err,data)=>{
            
            res.end(data);
        });
    
    }
    
    
});

server.listen(8080,()=>{
    console.log("server starteda at 8080");
})