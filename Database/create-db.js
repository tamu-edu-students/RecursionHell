var mysql = require('mysql2');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "toor1234"
})

conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected");
});