require('dotenv').config();

// Rest of the code

describe('Check userModel.test.js', () => {
    test('userModel.test.js should exist', () => {
      try {
        require('../../tests/models/userModel.test.js');
        expect(true).toBe(true);
      } catch (error) {
        expect(false).toBe(true);
      }
    });
  });