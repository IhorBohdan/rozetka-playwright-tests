import { test } from '@playwright/test';
import { MainPage } from '../pages/MainPage';

test('Select SmartPhone category in catalog', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
    await mainPage.closeAllBanners();
  await mainPage.openCatalog();
  await mainPage.hoverSmartphonesCategory();
  await mainPage.verifySubcategories();
});
