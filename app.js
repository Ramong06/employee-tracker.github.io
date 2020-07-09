var mysql = require('mysql2');
// var inquirer = require('inquirer');
// var consoleTable = require("console.table");
// var config = require('./package.json');

var connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: '',
    database: 'employee_trackerDB',
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('PORT CONNECTED BRO');
});

function newEmployee() {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            message: 'What would you like to do?',
            choices: [
                'Add Department',
                'View Department',
                'Add Role',
                'View Role',
                'Add Employee',
                'View Employee',
                'Update Employee Roles'
            ],
        })
        .then(function (answer) {
            //switch
        });
};