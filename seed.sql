USE employee_trackerDB;

INSERT INTO department
VALUES
("Management"),
("Human Resources"),
("Accounting"),
("IT"),
("Sales"),
("Customer Service");

INSERT INTO role
(title, salary, department_id)
VALUES
("Department Supervisor", 90000, 1),
("Department Manager", 75000, 1),
("Sales Director", 180000, 5),
("Outside Sales", 120000, 5),
("Inside Sales", 100000, 5),
