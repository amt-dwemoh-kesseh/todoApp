const Pool = require('pg').Pool
require("dotenv").config({ path: "../.env" });

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: "todoapp",
});

module.exports = pool