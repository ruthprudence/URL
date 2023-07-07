require('dotenv').config();

// Rest of the code

describe('Check analytics.test.js', () => {
    test('analytics.test.js should exist', () => {
      try {
        require('../../tests/features/analytics.test.js');
        expect(true).toBe(true);
      } catch (error) {
        expect(false).toBe(true);
      }
    });
  });