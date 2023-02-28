'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.belongsTo(models.Role, {
        foreignKey: 'roleId'
      });
    }
  }
  Usuario.init({
    nombre_de_usuario: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    DNI: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    fecha_de_nacimiento: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};