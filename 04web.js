//导入express
const express=require(`express`);

//创建web服务
const app=express();

//监听get请求
//访问的是根 输出hello word
app.get("/",(req,res)=>{
      res.send("helo word");
});

app.get("/html5",(req,res)=>{
    res.send("123");
});
app.post("/post",(req,res)=>{
    res.send("post方式");
});

//启动服务
app.listen(8080,()=>{
    console.log("server is running at http://127.0.0.1:8080")
})