// db.js (for setting up Sequelize connection)

const { Sequelize } = require('sequelize');

// Sequelize connection
const sequelize = new Sequelize('taskManagement', 'root', 'smart@2099', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
