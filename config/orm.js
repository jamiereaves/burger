//import connection.js file (i.e. MySQL connection).
var connection = require("../config/connection.js");

//SQL syntax helper function
function questionMarkGenerator(num) {
    //create empty array and hold it in a variable 
    var arr = [];
    //push a "num" question marks to arr with a for loop
    for (var i = 0 ; i < num ; i++) {
        arr.push("?");
    }
    //convert arr to a string
    return arr.toString();
}

//object key/value pair to SQL syntax converter helper function
function valToSQL(ob) {
    //create empty array and hold it in a variable
    var arr = [];
    //loop through the keys in the given object
    for (var key in ob) {
        //hold the data from a single key value in a variable 
        var value = ob[key];
        //check to skip hidden properties (taken from cat app class exercise)
        if (Object.hasOwnProperty.call(ob, key)) {
            //add quotation marks to string data that includes spaces
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            //push key/value results in modified syntax to arr
            arr.push(key + "=" + value);
        }
    }
    //as above, convert arr to a comma separated string
    return arr.toString();
}

//object for methods that wxecute MySQL commands in the controller
var ORM = {
    //selectAll method that displays all burgers
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err){
                throw err;
            }
            cb(result);
        });
        console.log(queryString);
    },
    //insertOne method that adds a burger to our list
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        //add the following to the initial queryString to complete the query with input values
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += questionMarkGenerator(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if(err) {
                throw err;
            }

            cb(result);
        });
    },
    //updateOne method that changes a single objColVals (i.e. the values of a given row)
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        //add the following to the initial queryString to complete the query with input values
        queryString += " SET ";
        queryString += valToSQL(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Export the ORM object for use in the model
module.exports = ORM;