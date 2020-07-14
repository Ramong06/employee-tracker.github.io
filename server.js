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
    //console.log('PORT IS CONNECTED');
    employeeTracker();
});

function employeeTracker() {
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
                    viewDepartments();
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
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is the name of the new department?",
            },
            {
                name: "id",
                type: "input",
                message: "What is the department's id?",
            }
        ])
        .then(function (answer) {
            var query = "INSERT INTO department (department_name) VALUES ?";
            connection.query(query, answer.department, function (err, res) {
                if (err) throw err;
            console.log("Your New Department Name is: " + answer.name);
            console.log("Your Department Id is: " + answer.id);
            employeeTracker();
        })
    })
}; 

function viewDepartments() {
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        console.log("Departments List: ");
        console.table(res);
        employeeTracker();
    })

};

function addRole() {
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, res){
        
        inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is the employee's First Name?",
                validate: function (value) {
                    if (value === "") {
                        return "You Must Enter A Value"
                    }
                    return true;
                },
            },
            {
                name: "last_name",
                type: "input",
                message: "What is the employee's Last Name?",
                validate: function (input) {
                    if (input === "") {
                        return "You Must Enter A Value";
                    }
                    return true;
                },
            },
    })
}