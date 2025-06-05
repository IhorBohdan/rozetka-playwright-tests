import { test } from '@playwright/test';
import { MainPage } from '../pages/MainPage';


test.describe('@smoke', () => {
test('Confirm that the user has selected the SmartPhone category in the catalog', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await mainPage.closeAllBanners();
  await mainPage.openCatalog();
  await mainPage.hoverSmartphonesCategory();
  await mainPage.verifySubcategories();
});
});
