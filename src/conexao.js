const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "",
  password: "",
  database: "dindin",
});

module.exports = pool;
