const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('rpgmatch', 'root', 'root', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  define: {
    freezeTableName: true,
    timestamps: false,
},
});

module.exports = sequelize;
