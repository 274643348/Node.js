/**
 * 从文件中读取
 */

let http = require("http");
let fs = require("fs");



//创建服务器
let server = http.createServer((req,res)=>{    
    console.log(req.url);
    //http://127.0.0.1:8000-------/
    //http://127.0.0.1:8000/hhhh-------/hhhh

    let errFunc =()=>{
        res.writeHead(400,{"Content-Type":"text/html;charset=UTF-8"});
        res.end("网络迷失在路上!!!");
    };

   if (req.url === "/") {
        res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        res.end("欢迎来到召唤师峡谷!!!");
   }else if(req.url === "/mm.png"){
        fs.readFile("./advancements_http/mm.png",(err,data)=>{
            if (!err) {
                res.writeHead(200,{"Content-Type":"image/png;charset=UTF-8"});
                res.end(data);
            }else
            {
                errFunc();
            }
        });

   }else if(req.url === "/mm"){
        fs.readFile(__dirname +"/mm",(err,data)=>{
            console.log(err);
            
            if (!err) {
                res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                res.end(data);
            }else
            {
                errFunc();
            }
        });
   }else{
    errFunc();
   }


});

//监听服务器
server.listen(8000,"127.0.0.1");