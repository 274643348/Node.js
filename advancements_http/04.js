/**
 * 从文件中读取
 */

let http = require("http");
let fs = require("fs");



//创建服务器
let server = http.createServer((req,res)=>{    
    console.log(req.url);

    let errFunc =()=>{
        res.writeHead(400,{"Content-Type":"text/html;charset=UTF-8"});
        res.end("网络迷失在路上!!!");
    };


        fs.readFile(__dirname + req.url,(err,data)=>{
            if (!err) {
                res.writeHead(200,{"Content-Type":"application/octet-stream;charset=UTF-8"});
                res.end(data);
            }else
            {
                errFunc();
            }
        });


});

//监听服务器
server.listen(8000,"172.16.0.86");