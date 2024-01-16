/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  rootDir: '..',
  testMatch: ['<rootDir>/component/**/*.test.js'],
  testTimeout: 120000,
  maxWorkers: 1,
  verbose: true,
};
