import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  firstName = '#first-name';
  lastName = '#last-name';
  zip = '#postal-code';
  continueBtn = '#continue';
  finishBtn = '#finish';

  async fillCheckoutForm(first: string, last: string, postal: string) {
    await this.fill(this.firstName, first);
    await this.fill(this.lastName, last);
    await this.fill(this.zip, postal);
    await this.click(this.continueBtn);
  }

  async finishCheckout() {
    await this.click(this.finishBtn);
  }
}