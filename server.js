var express = require("express");
// middleware
var bodyParser = require("body-parser");
// a conversion
// when something fired, do the appropriate method
var methodOverride = require("method-override");
var Sequelize = require('sequelize');
var port = 3000;

var app = express();

// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" 
// directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

// Set Handlebars default.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
    app.listen(port, function() {
        console.log("App listening on PORT " + port);
    });
});