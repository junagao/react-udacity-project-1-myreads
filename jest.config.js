module.exports = {
  clearMocks: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(png)$': '<rootDir>/fileTransformer.js',
  },
  moduleNameMapper: {
    '\\.scss$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    'src/**/*.js',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  setupFilesAfterEnv: [
    '<rootDir>/enzyme.setup.js',
    '<rootDir>/tests.setup.js',
  ],
};
