const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "pxukqohrckdfo4ty.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "t5phselrl98xvwtt",
        password: "ky0jmemexsf5l1b2",
        database: "hg1sixrm9gn0c7w7"
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;