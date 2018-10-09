let http=require("http");
let url=require("url");
let fs=require("fs");

http.createServer((req,res)=>{
    res.statusCode=200;
    let {pathname}=url.parse(req.url);
    let result=null;
    //排除 favicon.ico
    if(pathname==="/favicon.ico")return;
    //如果请求的url只有端口号时， 默认返回html
    if(pathname==="/getInfo"){
        result=fs.readFileSync(__dirname+"/json/data.json","utf-8");
        // res.setHeader("Content-Type",`${mime.getType(__dirname+"index.html")},charset=utf-8`);
        res.setHeader("Content-Type","application/json,charset=utf-8")
        console.log(result);
        res.end(result);
        return;
    }
    //如果找不到这个路径，或则路径地址是文件夹时 返回404
    fs.stat(__dirname+pathname,(err,file)=>{
        if(err){
            //报错时
            res.end("404");
        }else{
            //没报错时， 判断是否是一个文件
            if(file.isFile()){
                //是文件时 才返回
                result=fs.readFileSync(__dirname+pathname,"utf-8");
                res.end(result)
            }
        }
    })

}).listen(8080,()=>{
    console.log("OK");
});
