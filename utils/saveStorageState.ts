import { chromium, expect } from '@playwright/test';
import path from 'path';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://rozetka.com.ua/');

const loginButton = page.locator('rz-auth-icon button.header__button');
await expect(loginButton).toBeVisible({ timeout: 5000 });
await loginButton.click();

const googleButton = page.locator('span:text("Продовжити через Google")');
await expect(googleButton).toBeVisible({ timeout: 10000 });
await googleButton.click();

  await page.pause();

  await context.storageState({ path: path.join(__dirname, '../storageState.json') });

  await browser.close();
})();
