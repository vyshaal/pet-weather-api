// Create Express instance
var express = require('express');
var app = express();

// Add Body-Parser to parse post parameters
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// Start listening 
app.listen(process.env.PORT || 8000, function () {
    console.log('App listening on port ' + (process.env.PORT || 8000));
});