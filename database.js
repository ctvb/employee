const connection = require("./connection")
class Db {
    constructor(connection){this.connection = connection}
    findAllEmployees() {
        return this.connection.query('select employee.id, employee.fname, employee.lname, role.pos, department.department, role.salary, concat(manager.fname, " ", manager.lname) from employee left join role on employee.role_id = role.id left join department on role.department_id = department.id left join employee manager on manager.id = employee.manager_id;')
    }
    findAllRoles() {
        return this.connection.query('select role.id, department.department as department, role.salary from role left join department on role.department_id = department.id')
    }
    findAllDepartments() {
        return this.connection.query('select * from department')
    }

};

module.exports = new Db(connection)