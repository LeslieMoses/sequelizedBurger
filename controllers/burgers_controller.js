var express = require("express");
//copied from catsController.js 
var router = express.Router();

// Import the model (burger.js) 2 use its database fn.s
var burger = require("../models/burger.js");

// CC de catsController.js
// Create all our routes + set up logic w/n 
// those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    console.log('post working');
    // wh data looks like b4 db
    // req.body--data from app 2 server
    console.log("this is the req.body", req.body);
    // burger w/ all these methods; create a property
    burger.create([
        // sql col name
        "burger_name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;