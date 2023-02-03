const { Pool } = require("pg");

// Normally you would have to refrence the .env folder and manually put in the user, host, password, port and so on. However since we already have all of that in the env folder. It does allof that automatically for us
const pool = new Pool();
console.log("hey");

module.exports = {
  query: (text, params) => pool.query(text, params),
};
