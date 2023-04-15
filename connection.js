const util = require("util")
const mysql = require("mysql2")
const connection = mysql.createConnection({
    host:"localhost", user:"root", password:"pword", database:"workforce_db"
});

connection.connect()
connection.query=util.promisify(connection.query)
module.exports = connection
