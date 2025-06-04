import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testUser } from '../fixtures/user.fixture';

test('Користувач успішно логіниться', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.openLoginModal();
  await loginPage.login(testUser.email, testUser.password);
  await loginPage.assertLoggedIn();
});
