// Import the ORM 2 create functions 2 interact w/database.
// var orm = require("../config/orm.js");
// new data model

module.exports = function(sequelize, DataTypes) {
    return burger = sequelize.define("burger", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    })
}