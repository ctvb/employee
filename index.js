const inquirer = require("inquirer");
const Db = require("./database.js")
async function showQuestions() {
    const {choice} = await inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "what would you like to do?",
            choices: ["View Employees", "View Departments", "View Roles"]
        }
    ])
    switch (choice) {
        case "View Employees":
            
            return viewEmployees();
    
        default:
            break;
    }
}
async function viewEmployees() {
    const employees = await Db.findAllEmployees()
    console.table(employees)
    showQuestions()
}
showQuestions()