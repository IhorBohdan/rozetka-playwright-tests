import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();
export default defineConfig({
  grep: process.env.GREP ? new RegExp(process.env.GREP) : undefined,
  testDir: './tests',
  timeout: 30 * 1000,
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://rozetka.com.ua/',
    storageState: 'storageState.json',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright'],
  ],
});
