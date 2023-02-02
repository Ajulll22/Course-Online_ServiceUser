'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('users', [
        {
          name:"ajul",
          profession: "Admin Micro",
          role:'admin',
          email: 'ajulrizki@gmail.com',
          password: await bcrypt.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name:"nabil",
          profession: "Backend",
          role:'student',
          email: 'nabil@gmail.com',
          password: await bcrypt.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date()
        },
      ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
