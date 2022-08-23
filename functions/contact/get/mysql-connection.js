const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: process.env.RDS_HOST,
    user: process.env.RDS_USER,
    database: process.env.RDS_DATABASE,
    password: process.env.RDS_PASSWORD
}).promise()

const query = async (sql, params) => {
    const [rows] = await connection.query(sql, params)
    return rows
}

const findOne = async (sql, params) => {
    const [rows] = await connection.query(sql, params)
    return rows[0]
}

module.exports = { connection, query, findOne }