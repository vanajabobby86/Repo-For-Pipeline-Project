import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  cartIcon = 'button#add-to-cart';
  checkoutBtn = '#checkout';

  async openCart() {
    await this.click(this.cartIcon);
  }

  async checkout() {
    await this.click(this.checkoutBtn);
  }
}