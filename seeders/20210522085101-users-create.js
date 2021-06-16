'use strict';
var faker=require("faker");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    var newData = [];
    for (let i = 0; i < 20; i++) {
      const seedData = {
        username: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(8),
        role: faker.name.jobTitle(),
        createdAt: new Date(),
        updatedAt: new Date()
      };
      newData.push(seedData);
    }

    return queryInterface.bulkInsert('Users',newData);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
