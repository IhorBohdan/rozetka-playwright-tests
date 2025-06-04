import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();
export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  use: {
    headless: false, // залиш для видимих тестів
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://rozetka.com.ua/',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
