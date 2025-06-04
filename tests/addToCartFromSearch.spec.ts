import { test } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { CartPage } from '../pages/CartPage';
import { SearchPage }  from '../pages/SearchPage';

test('[@smoke] Check that the user can find the product and add it to the cart', async ({ page }) => {
  const mainPage = new MainPage(page);
  const cartPage = new CartPage(page);
  const searchPage = new SearchPage(page);

  await mainPage.open();
  await mainPage.searchForProduct('iPhone 16 Pro Max');

  await searchPage.addFirstItemToCart();
  await cartPage.openCart();
  await cartPage.verifyProductInCart('iPhone 16 Pro Max');
  await page.pause();

});
