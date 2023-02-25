'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_usuario: {
        type: Sequelize.STRING
      },
      DNI: {
        type: Sequelize.STRING,
        unique: true
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellidos: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.DATE
      },
      fecha_de_nacimiento: {
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING
      },
      contraseña: {
        type: Sequelize.STRING
      },
      roleId: {
        type: Sequelize.INTEGER,
        references : {
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
    await queryInterface.dropTable('Users');
  }
};