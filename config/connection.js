//configure MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
    port: 8889,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});
};
//establish MySQL connection
connection.connect(function(err) {
        if (err) {
            console.error("connection error: " + err.stack);
            return;
        }
        console.log("connected as id " + connection.threadId);
});

//export the connection for ORM use
module.exports = connection;