import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
  addToCartBtn = '#dd-to-cart-sauce-labs-backpack';

  selectPRoduct = 'a#item_3_title_link';

  async addProductToCart(productName: string) {
   await this.click(productName);
   await this.page.click(this.addToCartBtn)
  }

  async checkcartbag() {
    const count = await this.getText('shopping_cart_link');
    return parseInt(count || '0');
  }
}