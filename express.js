const express=require('express');
const app=express();
var date=require("silly-datetime");
var time=date.format(new Date(),'DD-MM-YYYY');
app.get('/',function(req,res){
    res.send(time);
});
app.listen(1337);
console.log('Server running at 127.0.0.1:1337');