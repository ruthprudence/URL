require('dotenv').config();

// Rest of the code

describe('Check helpers.test.js', () => {
    test('helpers.test.js should exist', () => {
      try {
        require('../../tests/utils/helpers.test.js');
        expect(true).toBe(true);
      } catch (error) {
        expect(false).toBe(true);
      }
    });
  });