import { Page, Locator } from '@playwright/test';

export class CatalogPage {
  readonly page: Page;
  readonly categories: Locator;

  constructor(page: Page) {
    this.page = page;
    this.categories = page.locator('div.catalog-dropdown');
  }

  async getCategoryList() {
    return this.categories.allTextContents();
  }
}
