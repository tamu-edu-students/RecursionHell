const express = require("express");
const cors = require("cors");
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();


// const db = require("./models");
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db."); // TODO need to check this
// }); //TODO get back db here

// Connect to mysql database with creds in db.config.js


// var conn = pg.createConnection({
//   host: dbConfig.HOST,
//   user : dbConfig.USER,
//   password : dbConfig.PASSWORD
// });

// const { Client } = require('pg');
// const dbConfig = require("./config/db.config");
// const client = new Client({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD
//   //port: dbConfig.PORT,
// })
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// // Create DB project_db if not existing, if present, connect

// client.query(
//   'CREATE DATABASE IF NOT EXISTS project_db',
//   function (err, result) {
//     if (err) throw err;
//     console.log('Connected to database')
//   }
// );

// client.end();

// Postgres connection

// const {Pool, CLient} = require('pg');
// const dbConfig = require("./config/db.config");

// const Creds = {
//   user : dbConfig.USER,
//   host: dbConfig.HOST,
//   database: dbConfig.DB,
//   password: dbConfig.PASSWORD,
//   port: 5432,
// };

// function clientConnect() {
//   const client = new Client(Creds);
//   client.connect();
//   client.query("CREATE DATABASE ")
//   //await client.end();

// }

if (process.env.NODE_ENV !== 'production') {
var corsOptions = {
  origin: "http://localhost:4200"
};
}


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// simple route

app.get("/", (req, res) => {
  res.redirect(process.cwd() + '/frontend/index.html')
});


var videos = require('./routes/videos');
//const dbConfig = require("./config/db.config");
app.use('/videos', videos);