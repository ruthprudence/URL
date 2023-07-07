/** @type {import('jest').Config} */
const config = {
    testEnvironment: 'node',
    testMatch: ['<rootDir>/tests/**/*.test.js'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: ['<rootDir>/src/**/*.js'],
    verbose: true,
  };
  
  module.exports = config;
  

  