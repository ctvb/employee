const inquirer = require("inquirer");
const Db = require("./database.js")
const {printTable} = require("console-table-printer")
async function showQuestions() {
    const {choice} = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "what would you like to do?",
            choices: ["View Employees", "View Departments", "View Roles", "Add Department", "Add Employee", "Add Role", "Update Employee Role"]
        }
    ])
    switch (choice) {
        case "View Employees":
            
            return viewEmployees();
        
        case "View Departments":

            return viewDepartments();

        case "View Roles":
        
            return viewRoles();

        case "Add Department":

            return addDepartment();

        case "Add Employee":

            return addEmployee();

        case "Add Role":

            return addRole();

        case "Update Employee Role":

            return updateEmployeeRole();

        default:
            break;
    }
}
async function viewEmployees() {
    const employees = await Db.findAllEmployees()
    printTable(employees)
    showQuestions()
}
async function viewDepartments() {
    const departments = await Db.findAllDepartments()
    printTable(departments)
    showQuestions()
}
async function viewRoles() {
    const roles = await Db.findAllRoles()
    printTable(roles)
    showQuestions()
}
async function addDepartment() {
    inquirer.prompt([{
        type: "input",
        message: "What is the new department?",
        name: "department"
    }])
    .then(async response => {
        const addDepartment = await Db.addDepartment(response)
        viewDepartments()
    })
}
async function addEmployee() {
    inquirer.prompt([{
        type: "input",
        message: "What is their first name?",
        name: "firstname"
    },
    {
        type: "input",
        message: "What is their last name?",
        name: "lastname"
    },
    {
        type: "input",
        message: "What is their role id?",
        name: "roleid"
    },
    {
        type: "input",
        message: "What is their manager id?",
        name: "managerid"
    }
])
    .then(async response => {
        const addEmployee = await Db.addEmployee(response)
        viewEmployees()
    })
}
async function addRole() {
    inquirer.prompt([{
        type: "input",
        message: "What is the new role?",
        name: "role"
    },
    {
        type: "input",
        message: "What is the salary?",
        name: "salary"
    },
    {
        type: "input",
        message: "What is the department id?",
        name: "departmentid"
    }
])
    .then(async response => {
        const addRole = await Db.addRole(response)
        viewRoles()
    })
}
async function updateEmployeeRole() {
    inquirer.prompt([{
        type: "input",
        message: "What is the employee id?",
        name: "empid"
    },
    {
        type: "input",
        message: "What is the role id?",
        name: "role_id"
    }

]).then(async response => {
    const updateEmployeeRole = await Db.updateEmployeeRole(response)
    viewEmployees()
})}

showQuestions()