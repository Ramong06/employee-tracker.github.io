var mysql = require('mysql2');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employee_trackerDB',
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('PORT IS CONNECTED');
});

function init() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'Add Department',
                'View Department',
                'Add Role',
                'View Role',
                'Add Employee',
                'View Employee',
                'Update Employee Roles',
                'Exit'
            ],
        })
        .then(function (answer) {
            switch (answer.action) {
                case 'Add Department':
                    addDepartment();
                    break;
                
                case 'View Department':
                    viewDepartment();
                    break;

                case 'Add Role':
                    addRole();
                    break;

                case 'View Role':
                    viewRole();
                    break;

                case 'Add Employee':
                    addEmployee();
                    break;

                case 'View Employee':
                    viewEmployee();
                    break;

                case 'Update Employee Roles':
                    updateEmployeeRoles();
                    break;

                case 'Exit':
                    connection.end();
                    break;
            }
        })
};

function addDepartment() {
    connection.query("SELECT * FROM department", function (
      err,
      data
    ) {
      if (err) throw err;
  
      inquirer
        .prompt([
          {
            name: "department",
            type: "input",
            message: "What is the name of the Department?",
          },
          {
            name: "departmentFunction",
            type: "input",
            message: "What is the purpose of this",
            choices: function () {
              var departmentArray = [];
              for (var i = 0; i < data.length; i++) {
                departmentArray.push(data[i].title);
              }
              return roleArray;
            },
          },