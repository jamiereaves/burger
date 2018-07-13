//import the ORM so that functions will interact with the database
var ORM = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        ORM.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        ORM.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        ORM.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

//export the above database functions for burgers_controller.js
module.exports = burger;