const dbPool = require("../config/database.js");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  return dbPool.execute(SQLQuery);
};

const getUser = (id) => {
  const SQLQuery = `SELECT * FROM users WHERE id = ${id}`;
  return dbPool.execute(SQLQuery);
};

const createNewUser = (name, email, address) => {
  const SQLQuery = `INSERT INTO users (name, email, address) 
                    VALUES ('${name}','${email}','${address}')`;
  return dbPool.execute(SQLQuery);
};

const updateUser = (id, name, email, address) => {
  const SQLQuery = `UPDATE users SET name = '${name}', email = '${email}', address = '${address}' 
                    WHERE id = ${id}`;
  return dbPool.execute(SQLQuery);
};

const deleteUser = (id) => {
  const SQLQuery = `DELETE FROM users WHERE id = ${id}`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
};
