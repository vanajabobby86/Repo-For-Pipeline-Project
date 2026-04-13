import { BasePage } from '../Pages/BasePage';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  usernameInput = '#user-name';
  passwordInput = '#password';
  loginBtn = '#login-button';

  async login(username: string, password: string) {
    await this.type(this.usernameInput, username);
    await this.type(this.passwordInput, password);
    await this.click(this.loginBtn);
  }
}
