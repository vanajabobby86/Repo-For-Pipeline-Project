import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
   addToCartBtn = 'button#add-to-cart';

  selectPRoduct = 'a#item_3_title_link';

  async addProductToCart(productName: string) {
   await this.page.locator('div.inventory_item_name ').filter({ hasText: productName }).click();
   await this.page.click(this.addToCartBtn)
  }

  async checkcartbag() {
    const count = await this.page.locator('a.shopping_cart_link').count();
    expect(count).toBeGreaterThan(0);
    return count;
  }
}