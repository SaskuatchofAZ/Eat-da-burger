// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "g8mh6ge01lu2z3n1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "y7nv3535sx22ih7w",
  password: "s78i8lm379vm0786",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
