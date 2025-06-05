import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('./');
  }

  async openLoginModal() {
    const loginButton = this.page.locator('li.header-actions__item--user button.header__button');
    await loginButton.click();
    await this.page.waitForTimeout(5000);
  }

  async login(email: string, password: string) {
    const emailInput = this.page.locator('input[type="email"]');
    const passwordInput = this.page.locator('input[type="password"]');
    const submitButton = this.page.locator('button[type="submit"]');

    await emailInput.fill(email);
    await passwordInput.fill(password);
    await submitButton.click();
  }

  async assertLoggedIn() {
    const userIcon = this.page.locator('rz-user');
    await expect(userIcon).toBeVisible({ timeout: 5000 });
  }
}
