const fs=require('fs');
const path=require('path');
// Create Folder
// fs.mkdir(path.join(__dirname,'/test'),{},err=>{
//     if(err) throw err;
//     console.log("Folder created...");
// })
// // Create and Write File
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World.....!',err=>{
//     if(err) throw err;
//     console.log("File written too");
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),'I love Node js',err=>{
//         if(err) throw err;
//         console.log("File append too");
//     })
// })
// Read file
// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })
// File Rename
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'),err=>{
    if(err) throw err;
    console.log("File renamed");
});