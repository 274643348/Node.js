let express = require("express");
let app = express();


//自定义路由
app.get("/",(req,res)=>{
    res.end("Hello World");
});

app.get("/send",(req,res)=>{
    res.send("明明:aa");
    
});

app.get("/write",(req,res)=>{
    res.write("write");
});

app.get("/end",(req,res)=>{
    res.end("end");
});



// app.get("/name/mingming",(req,res)=>{
    
//     res.end("name-mingming");
// });

app.get("/name/:name",(req,res)=>{
    
    res.end("params" + req.params.name);
});


// app.listen(3000,"172.16.0.241");
app.listen(3000);
