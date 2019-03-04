// Bring in necessary dependencies
const app = require('express')();
const mysql = require('mysql');
const bodyParser = require('body-parser');

//Use dotenv to read .env vars into Node
require('dotenv').config();

const routes = require('./routes');

// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});


// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

global.db = db;

const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client

// Connect all our routes to our application
app.use('/', routes);

// 404 page not found
app.use(function (req, res, next) {
    return res.status(400).json({ message: "Sorry can't find the requested page.", response: '' });
  })

// Turn on that server!
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});