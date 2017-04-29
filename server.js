var express = require('express'),
    morgan = require("morgan"),
    bodyParser = require("body-parser"),
    port = process.env.PORT || 8082,
    methodOverride = require("method-override"),
    app = express(),
    cors = require('cors');
    

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
    res.setHeader('Access-Control-Max-Age', '1000');
    return next();
});


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://jkelly:deserteagle5@ds125481.mlab.com:25481/mindsurf');


app.use(express.static(__dirname + '/client'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vdn.api+json' }));
app.use(methodOverride());



app.use('/', require('./controller/index'));
app.use('/auth', require('./controller/auth'));
app.use('/Memory', require('./controller/memory'));

app.listen(port, function(){
  console.log("Listening at " + port);
});
