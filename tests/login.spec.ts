import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testUser } from '../fixtures/user.fixture';

test('Verify that the user is successfully logged in', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.openLoginModal();
  await loginPage.login(testUser.email, testUser.password);
  await loginPage.assertLoggedIn();
});
