'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('Usuarios', [
        {id: 1,nombre_de_usuario: "Eddieden",nombre: "Ignacio",apellidos: "Furió José",DNI: "64738354A",edad: 31,fecha_de_nacimiento: "1991-12-12",email: "ignacio@gmail.com",contraseña: "loki",roleId: 1,createdAt: "2023-02-25 00:00:00",updatedAt: "2023-02-25 00:00:00"},
        {id: 2,nombre_de_usuario: "Tango06",nombre: "Gema Inmaculada",apellidos: "José SAla",DNI: "84736492E",edad: 59,fecha_de_nacimiento: "1963-05-06",email: "gema@gmail.com",contraseña: "zeusythor",roleId: 2,createdAt: "2023-02-25 00:00:00",updatedAt: "2023-02-25 00:00:00"},
        {id: 3,nombre_de_usuario: "Valsev",nombre: "Raúl",apellidos: "Furió José",DNI: "57497538W",edad: 35,fecha_de_nacimiento: "1987-04-12",email: "raul@gmail.com",contraseña: "ares",roleId: 3,createdAt: "2023-02-25 00:00:00",updatedAt: "2023-02-25 00:00:00"},
        ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
