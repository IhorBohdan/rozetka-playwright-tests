import { test } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { BasketPage } from '../pages/BasketPage';
import { SearchPage }  from '../pages/SearchPage';

test.describe('@criticalPath', () => {
    test('Check that the user can find the product and add it to the cart', async ({ page }) => {
  const mainPage = new MainPage(page);
  const basketPage = new BasketPage(page);
  const searchPage = new SearchPage(page);

  await mainPage.open();
  await mainPage.searchForProduct('iPhone 16 Pro Max');

  await searchPage.addFirstItemToCart();
  await basketPage.openBasket();
  await basketPage.verifyProductInCart('iPhone 16 Pro Max');
});
});
