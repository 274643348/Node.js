let express = require("express");
let path = require("path");
let app =express();

//所有文件的路径都是相对于存放目录的，因此，存放静态文件的目录名不会出现在 URL 中。


app.use("/game",express.static(path.normalize(__dirname + "/web-mobile")));
app.use("/game2",express.static(path.normalize(__dirname + "/web-mobile1")));
app.get("/",(req,res)=>{
    res.end("hello world");
});

app.listen(3000);