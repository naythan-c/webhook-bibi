const express = require('express');
const app = express();
var path = require('path');
const fetch = require('node-fetch')
var mongoUtil = require( './mongoUtil.js' );
var indexRouter = require('./routes/index.js')
var port = process.env.PORT;
// var port=3000;

// mongoUtil.connectToServer( function( err, client ) {
//   if (err) console.log(err);
//   // start the rest of your app here
// } );


app.use(express.json({extended: false}))
app.use('/', indexRouter);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
const http = require('http');
http.createServer(app).listen(port);
console.log(`Server started on port ${process.env.PORT} pid: ${process.pid}`);

setInterval(()=>{
    fetch('http://bibi-webhook.herokuapp.com').then(()=>{console.log('PINGED')})
},25*60*1000)
