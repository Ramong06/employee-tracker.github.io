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

function addEmployee() {
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
            {
                name: "role",
                type: "list",
                message: "What will be the employee's role?",
                choices: function () {
                  var roles = [];
                  for (var i = 0; i < res.length; i++) {
                    roles.push(res[i].title);
                  }
                  return roles;
                },
            },
            {
                name: "manager",
                type: "input",
                message: "Who will be the employee's manager?",
            },
        ])
        .then(function (answer) {
            for (var i = 0; i < res.length; i++) {
              if (res[i].title === answer.role) {
                answer.role_id = res[i].id;
              }
            }
            var query = "INSERT INTO employee SET ?";
            var values = {
              first_name: answer.first_name,
              last_name: answer.last_name,
              role_id: answer.role_id,
            };
    
            connection.query(query, values, function (err) {
              if (err) throw err;
              console.log("Employee has been added.");
            });
            viewRole();
          });
      });
    };

    function viewEmployee() {
        var query = "SELECT * FROM employee";
        connection.query(query, function(err, res) {
            console.log("Employees: ");
            console.table(res);
            employeeTracker();
        })
    };
    

function viewRole() {
    var query = "SELECT * FROM employee_role";
    connection.query(query, function(err, res) {
        console.log("Employee Duties: ");
        console.table(res);
        employeeTracker();
    })
};

function updateEmployeeRoles() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'Which employee would you like to update?',
            choices: [
                "Sheev Palpatine",
                "Darth Vader", 
                "Moff Jerjerrod", 
                "Babu Frik", 
                "Jaba The Hut",
                "C3PO", 
                "R2 D2", 
                "Boba Fett", 
                "Aurra Sing", 
                "Asajj Ventress",
            ],
        })
        .then(function (answer) {
            switch (answer.action) {
                case 'Sheev Palpatine':
                    sheevPalpatineRole();
                    break;
                
                case 'Darth Vader':
                    darthVaderRole();
                    break;

                case 'Moff Jerjerrod':
                    moffJerjerrodRole();
                    break;

                case 'Babu Frik':
                    babuFrikRole();
                    break;

                case 'Jaba The Hut':
                    jabaTheHutRole();
                    break;

                case 'C3PO':
                    c3poRole();
                    break;

                case 'Boba Fett':
                    bobaFettRole();
                    break;

                    case 'Aurra Sing':
                    aurraSingRole();
                    break;

                    case 'Asajj Ventress':
                    asajjVentress();
                    break;

                case 'Exit':
                    connection.end();
                    break;
            }
        })
};

