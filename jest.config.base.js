module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '(__tests__/.*.mock).tsx?$'
  ],
  coverageDirectory: '<rootDir>/coverage/',
  verbose: true
};