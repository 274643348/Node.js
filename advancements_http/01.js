let http = require("http");

//创建服务器
let server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/html;charset=UTF-8"});//UTF-8编码
    res.write("lalalal\t");
    res.write("lalalal\n");
    res.write("lalalal\n");
    res.end("明明家有台风!!!")
});

//监听
server.listen(8000,"127.0.0.1");