//DEPENDENCIES
var express = require("express");
var bodyParser = require ("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

//static content for the app is served from the 'public' directory within the app directory
app.use(express.static("public"));

//parse app/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse app/json
app.use(bodyParser.json());

//set up handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import routes and make them server-accessible
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//start sever
app.listen(PORT, function() {
    //console log the port on which the server is listening to ensure connection is properly made
    console.log("the server is listening on localhost" + PORT);
});