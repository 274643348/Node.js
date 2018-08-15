//什么是路由?
/**
 * 服务器端根据客户端传过来的url,返回对应的内容,再node.js中成为顶层路由设计;
 * uirl与物理文件不是一一对应的;
 * node.js没有web容器,没有根目录,不能像php,javaweb通过切换目录来切换页面;所有的页面资源都是通过路径配置;(在node中,采用fs模块杜如文件,并手动配置路由)
 */


 let http = require("http");

 //创建服务器
 let server = http.createServer((req,res)=>{
     console.log(req.url);
     //http://127.0.0.1:8000-------/
     //http://127.0.0.1:8000/hhhh-------/hhhh

    if (req.url === "/") {
        
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    res.end("欢迎来到召唤师峡谷!!!");
    }else if(req.url === "/mm"){
        res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        res.end("召唤出了mm");
    }else if(req.url === "/cc"){
        res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
        res.end("召唤出了cc");
    }else{
        res.writeHead(400,{"Content-Type":"text/html;charset=UTF-8"});
        res.end("网络迷失在路上!!!");
    }


 });

 //监听服务器
server.listen(8000,"127.0.0.1");

