const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection.js');

const Comentario = sequelize.define('Comentario', {
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
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  fk_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fk_postagem: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Comentario;
