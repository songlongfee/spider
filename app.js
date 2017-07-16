var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/',function(req,res){
  request('https://dribbble.com/shots',function(error,response,body){
    if(!error&&response.statusCode==200){
      $=cheerio.load(body);
      const item = [];
      $('.dribbble-shot img').each(function(i,elem){
        item[i] = $(this).attr('src');
      })
      res.send(item);
    }
  })
})
 
app.listen(3000);
