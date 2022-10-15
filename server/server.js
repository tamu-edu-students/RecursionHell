const express = require("express");
const cors = require("cors");

const app = express();

// const db = require("./models");
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db."); // TODO need to check this
// }); //TODO get back db here

// Connect to mysql database with creds in db.config.js

const mysql = require('mysql2');
const dbConfig = require("./config/db.config");
// var conn = mysql.createConnection({
//   host: dbConfig.HOST,
//   user : dbConfig.USER,
//   password : dbConfig.PASSWORD
// });

// Create DB project_db if not existing, if present, connect

// conn.query(
//   'CREATE DATABASE IF NOT EXISTS project_db',
//   function (err, result) {
//     if (err) throw err;
//     console.log('Created and connected to database!')
//   }
// );

// conn.end();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to POP application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});