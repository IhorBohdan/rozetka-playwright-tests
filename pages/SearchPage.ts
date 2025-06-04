import { Locator, Page, expect } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly cartCounter: Locator;
  readonly cartButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('input[name="search"]');
this.cartCounter = page.locator('rz-cart span.counter');
    this.cartButton = page.locator('button.header-cart__button:has(svg use[rziconname="icon-header-basket"])');
  }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchInput.press('Enter');
    await this.page.waitForLoadState('domcontentloaded');
  }

   async addFirstItemToCart() {
    const firstTile = this.page.locator('rz-product-tile').first();
    const buyButton = firstTile.locator('button.buy-button');

    await buyButton.scrollIntoViewIfNeeded();
    await buyButton.waitFor({ state: 'visible', timeout: 5000 });
    await buyButton.click();

    await expect(this.cartCounter).toHaveText(/1/, { timeout: 7000 });
  }
}
