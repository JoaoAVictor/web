const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection.js');

const Postagem = sequelize.define('Postagem', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  post: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imagem1: {
    type: DataTypes.STRING(255),
  },
  banner: {
    type: DataTypes.STRING(255),
  },
});

module.exports = Postagem;
