'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('people', [{
      name: 'Ana Souza',
      active: true,
      email: 'ana@email.com',
      role: 'student',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Marcos Cintra',
      active: true,
      email: 'marcos@email.com',
      role: 'student',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Felipe Cardoso',
      active: true,
      email: 'felipe@email.com',
      role: 'student',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sandra Gomes',
      active: false,
      email: 'sandra@email.com',
      role: 'student',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Paula Morais',
      active: true,
      email: 'paula@email.com',
      role: 'teacher',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sergio Lopes',
      active: true,
      email: 'sergio@email.com',
      role: 'teacher',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('people', null, {});
  }
};
