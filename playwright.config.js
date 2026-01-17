/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: "./tests",
  use: {
    baseURL: "http://localhost:5173",
    headless: false,
  },
};

module.exports = config;
