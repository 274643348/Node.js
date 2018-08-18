let http = require("http");
let fs = require("fs");
let path = require("path");
let url = require("url");
const { StringDecoder } = require('string_decoder');

//1:创建服务器
let server = http.createServer((req, res) => {
  //1:获取url路径;
  let pathUrl = url.parse(req.url);
  let pathName = pathUrl.pathname;
  console.log(pathUrl);

  //2:处理路径;
  if (path.extname(pathName) === -1) {
    res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
    res.end("无法访问路径");
  }

  //3:拼接路径
  let fileUrl = "./advancements_静态资源库(66-68)/2018-08/" + pathName;
  fileUrl = "./" + path.normalize(fileUrl);

  let fileUrlBuffer = Buffer.from(fileUrl);
  const decoder = new StringDecoder('utf8');
  console.log("编码:"+fileUrl);
  console.log("编码:"+decoder.end(fileUrlBuffer));

  //4:读取文件(同时判断mime类型)
  fs.readFile(fileUrl, (error, data) => {
    if (error) {
      res.writeHead(200, { "Content-Type": "text/html;charset=UTF-8" });
      res.end("不存在该文件");
      return;
    }
    //获取文件后缀;
    let extname = path.extname(fileUrl);
    getContentType(extname,(contentType)=>{
        res.writeHead(200, { "Content-Type": ""+contentType+";charset=UTF-8" });
        res.end(data);
    })

  });
});

//2:监听服务器
server.listen(8000, "127.0.0.1");

//获取文件的mime类型
function getContentType(extName, callBack) {
  fs.readFile("./advancements_静态资源库(66-68)/mime.json", (error, data) => {
    if (error) {
      return;
    }
    let mimeJson = JSON.parse(data.toString());
    let contentype = mimeJson[extName] || "text/plain";
    callBack(contentype);
    
  });
}
