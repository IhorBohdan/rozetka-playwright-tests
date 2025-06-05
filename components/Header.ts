import { expect, Locator, Page } from '@playwright/test';

export class Header {
  readonly cartCounter: Locator;

  constructor(private page: Page) {
    this.cartCounter = page.locator('rz-header-cart');
  }

    async checkCardCounter(counterValue: string) {
    await expect(this.cartCounter).toHaveText(counterValue, { timeout: 7000 });
  }
}
