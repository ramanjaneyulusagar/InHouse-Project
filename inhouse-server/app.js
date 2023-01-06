console.log('welcome to inhouse');
var express=require('express');
var http=require('http');
var path=require('path');
var app=express();
var fs=require('fs');
const { data } = require('jquery');
// const { json } = require('stream/consumers');
var server=http.createServer(app);
app.get('/',function(req,res){
  res.send('<h1>wecome express server </h1>');
  fs.readFile('db.json',function(err,data){
    res.send(data)
});



// fs.readFile('inhouse-server/db.json',function(err,data){
//   var d=data
// res.send(d);
// // res.json(d);
// // console.log('nodemon server started');
// res.send('<h1>hello world</h1>')
// })
});
server.listen(3000,function(){
  console.log('server is running in port 3000 inhouse');
});



