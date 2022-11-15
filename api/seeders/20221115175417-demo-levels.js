'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('levels', [
        {
          level_description: 'basic',
          createdAt: new Date(),
          updatedAt: new Date()			
        },
        {
          level_description: 'intermediary',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          level_description: 'advanced',
          createdAt: new Date(),
          updatedAt: new Date()
        } 
     ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('levels', null, {});
  }
};
