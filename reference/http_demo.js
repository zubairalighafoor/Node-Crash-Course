const http=require('http');
// Create Server Object
http.createServer((req,res)=>{
    // Write Response
    res.write('Zubair Hunjrah');
    res.end();
}).listen(3000,()=>console.log("Server Running"));