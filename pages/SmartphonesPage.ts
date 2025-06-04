import { expect, Locator, Page } from '@playwright/test';

export class SmartphonesPage {
  readonly page: Page;
  readonly firstBuyButton: Locator;
  readonly cartCounter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstBuyButton = page.locator('button.buy-button').first();
    this.cartCounter = page.locator('rz-cart button span.counter');
  }

  async addFirstItemToCart() {
    await this.firstBuyButton.click();
  }

  async verifyItemAddedToCart() {
    await expect(this.cartCounter).toHaveText(/1/);
  }
}
