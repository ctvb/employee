const connection = require("./connection")
class Db {
    constructor(connection) { this.connection = connection }
    findAllEmployees() {
        return this.connection.query('select employee.id, employee.fname FirstName, employee.lname LastName, role.pos Position, department.department, role.salary, concat(manager.fname, " ", manager.lname) Manager from employee left join role on employee.role_id = role.id left join department on role.department_id = department.id left join employee manager on manager.id = employee.manager_id;')
    }
    findAllRoles() {
        return this.connection.query('select role.id, department.department as department, role.salary from role left join department on role.department_id = department.id')
    }
    findAllDepartments() {
        return this.connection.query('select * from department')
    }
    addDepartment(response) {
        return this.connection.query('insert into department(department)values(?)', [response.department])
    }
    addEmployee(response) {
        return this.connection.query('insert into employee(fname, lname, role_id, manager_id)values(?, ?, ?, ?)', [response.firstname, response.lastname, response.roleid, response.managerid])
    }
    addRole(response) {
        return this.connection.query('insert into role(pos, salary, department_id)values(?, ?, ?)', [response.role, response.salary, response.departmentid])
    }
    updateEmployeeRole(response) {
        return this.connection.query('update employee set role_id = ? where manager_id = ?', [response.role_id, response.empid])
    }
};

module.exports = new Db(connection)