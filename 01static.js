//1,导入模块
const fs = require("fs");
const http=require(`http`);
const path= require(`path`);
//2,创建web服务实例
const server=http.createServer();
//3,监听
server.on("request",(req,res)=>{
   //5,获取请求地址
   let pathname=req.url;

   //6,对"/"做处理
   pathname=pathname==="/"?"/index.html":pathname;

   //7，图标处理
   let filename=path.join(__dirname,"public",pathname);
   
   //8,读取文件并输出
   fs.readFile(filename,(err,data)=>{
      if(err){
          res.statusCode=500;
          res.end("server internal error.");
      }else{
          res.end(data);
      }
   })
});
//4,启动服务
     server.listen(8080,()=>{console.log(`server is running at http://127.0.0.1:8080`);});
