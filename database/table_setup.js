const {Pool, Client} = require('pg');
const crypto = require('crypto');
const dbConfig = require("../server/config/db.config");

const Creds = {
  user : dbConfig.USER,
  host: dbConfig.HOST,
  database: dbConfig.DB,
  password: dbConfig.PASSWORD,
  port: 5432
};

const client = new Client(Creds);
client.connect();
const createTableQuery = `CREATE TABLE IF NOT EXISTS logins (
    id serial primary key,
    username varchar,
    password varchar
);`;

client.query(createTableQuery, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Table Created successfully');
    // client.end();
});
test_pwd = '1234'
uname = 'test@testmail.com'
const hash = crypto.createHash('sha256').update(test_pwd).digest('base64');

const insertIntoTableQuery = `INSERT INTO logins(username, password) VALUES($1,$2)`;

client.query(insertIntoTableQuery, [uname, hash], (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Element Added into Table');
    client.end();
});