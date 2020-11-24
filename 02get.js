//导入http模块
const http=require(`http`);
const  url = require("url");
//创建实例
const server=http.createServer();
//监听
server.on("request",(req,res)=>{
    //获取地址栏中的query数据（解构赋值）
    let{query}=url.parse(req.url,true);
        console.log(query);
});
server.listen(8080,()=>{console.log(`server is running at http://127.0.0.1:8080?id=100`);})