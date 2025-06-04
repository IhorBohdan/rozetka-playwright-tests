import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test('Rozetka main page UI: all main controls are present', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();

  await expect(mainPage.menuButton).toBeVisible();
  await expect(mainPage.catalogButton).toBeVisible();
  await expect(mainPage.searchInput).toBeVisible();
  await expect(mainPage.voiceButton).toBeVisible();
  await expect(mainPage.searchButton).toBeVisible();
  await expect(mainPage.loginButton).toBeVisible();
  await expect(mainPage.compareButton).toBeVisible();
  await expect(mainPage.cartButton).toBeVisible();

});
