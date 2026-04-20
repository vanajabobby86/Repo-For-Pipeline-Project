import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 1,
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    baseURL: 'https://www.saucedemo.com',
  },

  globalSetup: './global-setup.ts',
  
});
