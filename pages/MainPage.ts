import { Page, Locator, expect } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly menuButton: Locator;
  readonly catalogButton: Locator;
  readonly searchInput: Locator;
  readonly voiceButton: Locator;
  readonly searchButton: Locator;
  readonly loginButton: Locator;
  readonly compareButton: Locator;
  readonly cartButton: Locator;
  readonly catalogMenu: Locator;
  readonly smartphonesCategory: Locator;
  readonly subCategories: Locator;
  readonly categoryLinks: Locator;
    
  constructor(page: Page) {
    this.page = page;
    this.menuButton = page.locator('[data-testid="menu_button"]');
    this.catalogButton = page.locator('[data-testid="fat_menu_btn"]');
    this.searchInput = page.locator('input[name="search"]');
    this.voiceButton = page.locator('button[aria-label="Голосовий пошук"]');
    this.searchButton = page.locator('button.button.search-form__submit:has-text("Знайти")');
    this.loginButton = page.locator('button.header__button:has(svg use[rziconname="icon-user-simple"])');
    this.compareButton = page.locator('a.compare-button.header__button:has(svg use[rziconname="icon-compare"])');
    this.cartButton = page.locator('button.header-cart__button:has(svg use[rziconname="icon-header-basket"])');
    this.catalogMenu = this.page.locator('rz-navigation-menu');
    this.categoryLinks = page.locator('a[data-testid="fat_menu_category_link"]');
    this.smartphonesCategory = page.locator('rz-main-page-sidebar a[data-testid="fat_menu_category_link"]').filter({ hasText: ' Смартфони, ТВ і електроніка ' }).first();
    this.subCategories = page.locator('ul.menu-categories_type_second li a');
    this.searchInput = page.locator('input[name="search"]');
    this.searchButton = page.locator('button.search-form__submit');
  }

  async open() {
    await this.page.goto('/');
  }

async closeAllBanners() {
  const closeButton = this.page.locator('button:has-text("Close")');
  const banner = this.page.locator('#rz-banner span').nth(1);

  const closeButtonExists = await closeButton.isVisible();
  if (closeButtonExists) {
    await closeButton.click();
  } else {
    console.log('Кнопка закриття не знайдена');
  }

  const bannerExists = await banner.isVisible();
  if (bannerExists) {
    await banner.click();
  } else {
    console.log('Банер не знайдений');
  }
}
   async openCatalog() {
    await this.catalogButton.click();
     await this.page.waitForTimeout(500);
  }

  async hoverSmartphonesCategory() {
    const smartphonesCategory = this.categoryLinks.nth(1);
    await smartphonesCategory.scrollIntoViewIfNeeded();
    await smartphonesCategory.hover({ force: true }); await this.page.waitForTimeout(500);
  }

  async verifySubcategories() {
    const expectedTexts = [
      'Телефони',
      'Apple',
      'Samsung',
      'Xiaomi',
      'Motorola',
      'Nokia',
      'Смартфони',
      'Кнопкові телефони',
    ];

    for (const text of expectedTexts) {
      await expect(this.page.locator('ul.list-content')).toContainText(text);
    }
  }

  async searchForProduct(productName: string) {
  await this.searchInput.fill(productName);
  await this.searchButton.click();
}
}
