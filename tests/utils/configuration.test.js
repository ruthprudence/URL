require('dotenv').config();

const config = require('../../yu-ar-el_front-end/src/config/firebaseConfig');

describe('Configuration Object', () => {
  test('Configuration object exists', () => {
    expect(config).toBeDefined();
  });

  test('Configuration object is not empty', () => {
    expect(Object.keys(config).length).toBeGreaterThan(0);
  });

  test('Configuration object contains required properties', () => {
    const requiredProperties = [
        'apiKey',
        'authDomain',
        'projectId',
        'storageBucket',
        'messagingSenderId',
        'appId',
        'measurementId',
    ];

    requiredProperties.forEach((property) => {
      expect(config[property]).toBeDefined();
    });
  });
});
