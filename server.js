// Node Dependencies
var express = require('express');
var path=require('path');
// body-parser is depracated
// var bodyParser = require('body-parser');

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(process.cwd() + '/public'));
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({ extended: true }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// app.set('views',path.join(__dirname,'views'));


var router = require('./controllers/burgers_controller.js');
app.use('/', router);

// Open Server
var port = process.env.PORT || 3000;
app.listen(port, function (err) {
    if(!err){
        console.log("App listening on PORT " + port);
    }
    else console.log(err)
});

module.exports = app;
