// Import the ORM 2 create functions 2 interact w/database.
var orm = require("../config/orm.js");

// creating burger obj
var burger = {
    // key method "all" runs cb fn...
    all: function(cb) {
        // ...which gets all the table input and cb response
        orm.all("burgers", function(res) {
            // calling the cb fn
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    // key method "all" runs cb fn w/ 3params
    create: function(cols, vals, cb) {
        // property of burger obj(??), orm.create is a fn w/4 params
        orm.create("burgers", cols, vals, function(res) {
            // calling cb
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;