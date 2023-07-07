require('dotenv').config();

// Rest of the code

describe('Check urlController.test.js', () => {
    test('urlController.test.js should exist', () => {
      try {
        require('../../tests/controllers/urlController.test.js');
        expect(true).toBe(true);
      } catch (error) {
        expect(false).toBe(true);
      }
    });
  });