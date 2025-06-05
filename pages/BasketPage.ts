import { expect, Locator, Page } from '@playwright/test';
import { Header } from '../components/Header';

export class BasketPage {
  readonly buyButton: Locator;
  readonly basketIcon: Locator;
  readonly cartProductTitle: Locator;
  readonly badge: Locator;
  private header: Header;

  constructor(private page: Page) {
    this.header = new Header(this.page);
    this.buyButton = page.locator('button[aria-label="Купити"]').first();
    this.basketIcon = page.locator('[rzIconName="icon-header-basket"]');
    this.cartProductTitle = page.locator('[data-testid="title"]');
    this.badge = page.locator('rz-icon-badge .badge');
  }

    async openBasket() {
      await this.page.waitForTimeout(5000);
      await this.basketIcon.click();
    }

    async verifyProductInCart(expectedText: string) {
      await expect(this.cartProductTitle).toContainText(expectedText, {
      timeout: 7000,
      });
    }
}
