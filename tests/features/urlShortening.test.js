require('dotenv').config();

// Rest of the code

describe('Check urlShortening.test.js', () => {
    test('urlShortening.test.js should exist', () => {
      try {
        require('../../tests/features/urlShortening.test.js');
        expect(true).toBe(true);
      } catch (error) {
        expect(false).toBe(true);
      }
    });
  });