import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('@smoke', () => {
test('Verify that the user is successfully logged in', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.openLoginModal();
  await loginPage.assertLoggedIn();
});
});
