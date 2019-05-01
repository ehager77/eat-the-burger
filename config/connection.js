// // Pull in required dependencies
// var mysql = require('mysql');

// // Create the MySQL connection object
// var connection;

// if (process.env.JAWSDB_URL) {
// 	// DB is JawsDB on Heroku
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// 	// DB is local on localhost
// 	connection = mysql.createConnection({
// 		port: 3306,
//         host: 'ctgplw90pifdso61.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
// 		user: 'uq8uis334mjcdmiw',
// 		password: 'bgjojm86qllyd4dc',
// 		database: 'l6qovsow9j04ro08'
// 	})
// };

// // Make the connection to MySQL
// connection.connect(function(err) {
//   if (err) {
//     console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
//     return;
//   }
//   console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
// });

// // Export connection for ORM use
// module.exports = connection;

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
