let express = require("express");
let path = require("path");
let app =express();
app.use(express.static(path.normalize(__dirname + "/web-mobile")));

app.get("/a",(req,res)=>{
    res.end("hello world");
});

app.listen(3000);