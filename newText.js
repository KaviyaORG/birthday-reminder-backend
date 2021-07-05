const express = require('express');
const app =express();
const fs = require('fs');
const path = require('path');

app.use('/mycss',express.static(__dirname+'/css'));

app.get('/',(req,res)=>{
    res.sendFile('main.html',{root:__dirname});
});
app.get(/^(.+)/,(req,res)=>{
    try {
        if (fs.statSync(path.join(__dirname,'views',req.params[0]+'.html'))){
            res.sendFile(req.params[0]+'.html',{root:path.join(__dirname,'views')});
        }
    }catch (e) {
        res.sendFile('notfound.html',{root:path.join(__dirname,'views')});
    }
    // res.sendFile(req.params[0]+'.html',{root:path.join(__dirname,'views')});
});
// app.get(/^(.+)/,function(req,res){
//     res.sendFile(req.params[0]+'.html',{root:path.join(__dirname,'views')});
// });

app.listen(8080,()=>{
    console.log("server is up...");
});