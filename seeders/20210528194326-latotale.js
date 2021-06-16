'use strict';
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    var newUsers = [];
    var newTags = [];
    for (let i = 0; i < 20; i++) {
      let seedData = {
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(8),
        role: faker.helpers.randomize(['admin', 'author', 'guest']),
        createdAt: faker.date.between('2000-01-01','2021-01-01'),
        updatedAt: new Date()
      };
      newUsers.push(seedData);
      return queryInterface.bulkInsert("Users",newUsers);
    }
    
    for (let j = 0; j < 10; j++) {
      let seedData2 = {
        name: faker.lorem.words(),
        createdAt: faker.date.past(10),
        updatedAt: new Date()
      };
      newTags.push(seedData2);
      return queryInterface.bulkInsert("Tags",newTags);
  }
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
