const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [{
        username: 'calleri3',
        email: 'calleri3@gmail.com',
        created_at: new Date(),
        updated_at: new Date(),
        password_hash: await bcryptjs.hash('123456', 8),
      },
      {
        username: 'calleri4',
        email: 'calleri4@gmail.com',
        created_at: new Date(),
        updated_at: new Date(),
        password_hash: await bcryptjs.hash('123456', 8),
      },
      {
        username: 'calleri5',
        email: 'calleri5@gmail.com',
        created_at: new Date(),
        updated_at: new Date(),
        password_hash: await bcryptjs.hash('123456', 8),
      }],
      {},
    );
  },

  async down() {
  },
};
