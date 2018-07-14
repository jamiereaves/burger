//import express and models/burger.js (to use its database fns)
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//create routes
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name", "eaten"
    ], [
        req.body.name, req.body.eaten
    ], function(result) {
        //return the id of the new burger
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        eaten: req.body.eaten,
        loved: req.body.loved
    }, condition, function(result) {
        //if no rows are changed an invalid id was input => 404 error
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else{
            res.status(200).end();
        }
    });

});

//export routes for use by server.js
module.exports = router;