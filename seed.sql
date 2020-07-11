USE employee_trackerDB;

INSERT INTO department
VALUES
('Management'),
('Human Resources'),
('Accounting'),
('IT'),
('Sales'),
('Customer Service');

INSERT INTO role
(title, salary, department_id)
VALUES
('Department Supervisor', 90000, 1),
('Department Manager', 75000, 1),
('HR Director', 100000, 2),
('HR Manager', 75000, 2),
('Accountant', 55000, 3),
('IT Analyst', 80000, 4),
('IT Director', 120000, 4),
('Sales Director', 180000, 5),
('Outside Sales', 120000, 5),
('Inside Sales', 100000, 5),
('Customer Service Representative', 34000, 6),

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Sheev')