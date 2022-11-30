const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');
const node = require('node.js');
// cont nodejs = require('node.js');
//      ^^^^^ 
// SyntaxError: Unexpected identifier

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tracker_db'
  },
  console.log(`Connected to the tracker_db database.`)
);

const [rows, fields] = await connection.execute('SELECT * FROM tracker_db WHERE first_name = ? AND role > ?', ['', INT]);

// simple query
db.query('SELECT COUNT(id) AS tracker_db FROM department_db GROUP BY name', function (err, results) {
  console.log(results);
});

// simple query
db.query('SELECT COUNT(id) AS tracker_db FROM role_db GROUP BY department_id', function (err, results) {
  console.log(results);
  console.log(fields);
});

// simple query
db.query('SELECT COUNT(id) AS tracker_db FROM employee_db GROUP BY role_id', function (err, results) {
  console.log(results);
  console.log(fields);
});

//totals salaries
db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM salary GROUP BY section', function (err, results) {
  console.log(results);
  console.log(fields);
});
// end here

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});