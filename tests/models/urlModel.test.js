require('dotenv').config();

// Rest of the code

describe('Check urlModel.test.js', () => {
    test('urlModel.test.js should exist', () => {
      try {
        require('../../tests/models/urlModel.test.js');
        expect(true).toBe(true);
      } catch (error) {
        expect(false).toBe(true);
      }
    });
  });