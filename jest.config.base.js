module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '(__tests__/.*.mock).tsx?$'
  ],
  coverageDirectory: '<rootDir>/coverage/',
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.mjs$": "babel-jest"
  },
  transformIgnorePatterns: ["/node_modules/(?!d3*)"],
  verbose: true
};