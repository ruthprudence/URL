require('dotenv').config();

// Rest of the code

describe('Check userController.test.js', () => {
    test('userController.test.js should exist', () => {
      try {
        require('../../tests/controllers/userController.test.js');
        expect(true).toBe(true);
      } catch (error) {
        expect(false).toBe(true);
      }
    });
  });