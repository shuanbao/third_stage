//导入http模块
const http=require(`http`);

//创建实例
const server=http.createServer();

//监听
server.on("request",()=>{
    //创建空数组存储
    let arr=[];
    //数据接收中
    req.on(`data`,buffer=>{
        arr.push(buffer);
    });
    //数据传输结束
    req.on(`end`,()=>{
        //拼接接收到的数据
        let buffer=Buffer.concat(arr);
        let post=queryString.parse(buffer.toString())
        console.log(post);
    });
}).listen(8080)