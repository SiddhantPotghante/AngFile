#! /usr/bin/env node
var http = require("http");
var shell = require('shelljs');
var express = require('express');
var app = express();
var fs = require("fs");
const csv=require('csvtojson')
// const request=require('request')
const csvFilePath='./MOCK_DATA.csv'
jsonObjSend:any={};
const str="1,2,3,4,5,6,7,8,9"

var apiKey = {
    "key": "8CElfGmeiIwc5errIFY3flpWvqq_HZnc"
}
;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get('/user', (req, res) => {
    csv()
  .fromFile(csvFilePath)
  .on("end_parsed",function(jsonArrayObj){ //when parse finished, result will be emitted here.
     console.log(jsonArrayObj); 
     res.send(jsonArrayObj)
   })
.on('done',()=>{
    //parsing finished
})
    // res.json([{
    //     Customer_ID: 1507843123970,
    //     Bank_Account_Number: 7885236985412589,
    //     Bank_Name: "Some Bank",
    //     Bank_Address1: "Some Address",
    //     Bank_Address2: null,
    //     Account_Holder_Name: "Some Name",
    //     Account_Type: "Savings",
    //     Transaction_Limit: 5000
    // },{
    //     Customer_ID: 1507843123970,
    //     Bank_Account_Number: 7885236985412589,
    //     Bank_Name: "Some Bank",
    //     Bank_Address1: "Some Address",
    //     Bank_Address2: null,
    //     Account_Holder_Name: "Some Name",
    //     Account_Type: "Savings",
    //     Transaction_Limit: 5000
    // }]);
 });

 app.get('/apikey', (req, res) =>{
    res.send(apiKey);
 } )




//  app.get('/user', function (req, res) {
//     res.send('Hello');
//  })


//shell.exec("echo shell.exec works");
//shell.exec("ng g component Test");

// console.log("Going to write into existing file");
// fs.writeFile('input.txt', 'Simply Easy Learning!',  function(err) {
//    if (err) {
//       return console.error(err);
//    }
   
//    console.log("Data written successfully!");
//    console.log("Let's read newly written data");
//    fs.readFile('input.txt', function (err, data) {
//       if (err) {
//          return console.error(err);
//       }
//       var result = data.toString().replace("Employee", 'Empoyee');

//   fs.writeFile('C:\\Users\\swapnil.gajbhiye\\Desktop\\angfile\\testfolder\\input.txt', result, 'utf8', function (err) {
//      if (err) return console.log(err);
//   });
//       console.log("Asynchronous read: " + result.toString());
//    });

// console.log("Going to get file info!");
// fs.stat('input.txt', function (err, stats) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log(stats);
//    console.log("Got file info successfully!");
   
//    // Check file type
//    console.log("isFile ? " + stats.isFile());
//    console.log("isDirectory ? " + stats.isDirectory());    
// });
// Asynchronous - Opening File
// console.log("Going to open file!");
// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//   console.log("File opened successfully!");     
// });

// http.createServer(function (request, response) {

//     // Send the HTTP header 
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    
//     // Send the response body as "Hello World"
//     response.end('Hello World\n');
//  }).listen(8082);
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })

 
module.exports = app;