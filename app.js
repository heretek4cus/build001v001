

//var createError = require('http-errors');

var express = require('express');
var app = express();

const bodyParser = require('body-parser');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nodemailer = require('nodemailer');
var multer = require('multer');

const routes = require('./routes/index');

var jwt = require('jsonwebtoken');

app.set('secretKey', 'nodeRestAPI'); // jwt secret token

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1', routes);

app.get('/', function(req,res){
  res.json({"Welcome" : "CommuneGenie (CG) Copyright 2018. Rest API Services."})
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
	console.log(err);
	
  if(err.status === 404)
  	res.status(404).json({message: "Not found"});
  else	
    res.status(500).json({message: "Something looks wrong :( !!!"});

});

  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'dev' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.json({"Error":err.message});
// });

module.exports = app;


