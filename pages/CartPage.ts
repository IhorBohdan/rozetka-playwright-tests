import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly buyButton: Locator;
  readonly cartButton: Locator;
  readonly cartProductTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buyButton = page.locator('button[aria-label="Купити"]').first();
    this.cartButton = page.locator('button.header-cart__button:has(svg use[rziconname="icon-header-basket"])');
    this.cartProductTitle = page.locator('rz-cart .cart-product__title');
  }

    async openCart() {
    await this.cartButton.waitFor({ state: 'visible', timeout: 7000 });
    await this.cartButton.click();
    await expect(this.cartProductTitle).toBeVisible({ timeout: 7000 });
  }

    async verifyProductInCart(expectedText: string) {
    await expect(this.cartProductTitle.first()).toContainText(expectedText, {
      timeout: 7000,
    });
  }
}
