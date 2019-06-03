module.exports = {
  roots: ['src'],
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['.git'],
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: ['src/**/*.{js}'],
  setupFiles: ['<rootDir>/test/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  testURL: 'http://localhost/'
};
