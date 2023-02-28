'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_de_usuario: {
        type: Sequelize.STRING,
        unique: true
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellidos: {
        type: Sequelize.STRING
      },
      DNI: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.INTEGER
      },
      fecha_de_nacimiento: {
        type: Sequelize.DATEONLY
      },
      email: {
        type: Sequelize.STRING
      },
      contraseña: {
        type: Sequelize.STRING
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Roles",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};