module.exports = {
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
    },
  },
  setupFiles: [
    '<rootDir>setup.jest.ts',
  ],
  verbose: true,
  testMatch: [
    '**/*.(test|spec).ts?(x)',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
