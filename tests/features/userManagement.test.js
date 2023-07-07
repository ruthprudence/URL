require('dotenv').config();

// Rest of the code

describe('Check userManagement.test.js', () => {
    test('userManagement.test.js should exist', () => {
      try {
        require('../../tests/features/userManagement.test.js');
        expect(true).toBe(true);
      } catch (error) {
        expect(false).toBe(true);
      }
    });
  });