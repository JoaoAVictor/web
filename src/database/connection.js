const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('rpgmatch', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
