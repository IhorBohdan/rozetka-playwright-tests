import { chromium } from '@playwright/test';
import path from 'path';
import { LoginPage } from '../pages/LoginPage';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  const loginPage = new LoginPage(page);

  await page.goto('https://rozetka.com.ua/');

  await loginPage.openLoginModal();

await page.waitForSelector('iframe[name]');
  const iframeElement = await page.$('iframe[name]');

  if (!iframeElement) {
    throw new Error('❌ iframe не знайдено');
  }

  const frame = await iframeElement.contentFrame();

  if (!frame) {
    throw new Error('❌ Не вдалося отримати контент з iframe');
  }

  await frame.locator('input[data-qaid="phone"]').fill('683727308');
  await frame.locator('button[data-qaid="submit-phone"]').click();
  await page.pause();
  await context.storageState({ path: path.resolve('storageState.json') });
  console.log('Storage state saved to storageState.json');
  await browser.close();
})();
