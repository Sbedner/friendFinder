// Dependecies
// ==========================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Setup express app 
// ==========================================================

var app = express();
var PORT = process.env.PORT || 8080;

// Sets up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes")(app);


// Starts the server to begin listening
// ====================================================
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
});