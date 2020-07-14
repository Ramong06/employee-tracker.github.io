-- CREATE DATABASE IF NOT EXISTS employee_trackerDB;

-- USE employee_trackerDB;

-- CREATE TABLE department (
--   id INT AUTO_INCREMENT,
--   department_name VARCHAR(30) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE employee_role (
-- id INT PRIMARY KEY NOT NULL,
-- title VARCHAR(30) NOT NULL,
-- salary DECIMAL(10, 4),
-- department_id INT
-- );

-- CREATE TABLE employee (
-- id INT PRIMARY KEY NOT NULL,
-- first_name VARCHAR(30) NOT NULL,
-- last_name VARCHAR(30) NOT NULL,
-- role_id INT,
-- manager_id INT
-- );