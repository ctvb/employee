DROP DATABASE IF EXISTS workforce_db;
CREATE DATABASE workforce_db;

USE workforce_db;


CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department VARCHAR(30) UNIQUE NOT NULL
);


CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pos VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL,
    department_id INT,
    CONSTRAINT fk_department FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE CASCADE
);


CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(30),
    lname VARCHAR(30),
    role_id INT,
    manager_id INT,
    CONSTRAINT fk_role
    FOREIGN KEY(role_id)
    REFERENCES role(id)
    ON DELETE SET NULL,
    CONSTRAINT fk_manager FOREIGN KEY(manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);
