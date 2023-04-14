DROP DATABASE IF EXISTS workforce_db;
CREATE DATABASE workforce_db;

USE workforce_db;


CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department VARCHAR() NOT NULL
);


CREATE TABLE job (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pos VARCHAR(),
    salary DECIMAL,
    department_id INT,
    CONSTRAINT fk_department FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET CASCADE
);


CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(),
    lname VARCHAR(),
    role_id INT,
    manager_id INT,
    FOREIGN KEY(role_id)
    REFERENCES ROLE(id)
    ON DELETE SET NULL,


    CONSTRAINT fk_manager FOREIGN KEY(manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
)
