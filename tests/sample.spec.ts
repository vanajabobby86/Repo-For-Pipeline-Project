import { test, expect } from '@playwright/test';

test('Facebook login', async ({ page }) => {
  await page.goto('https://www.facebook.com');
  await page.fill('input[name="email"]', 'your-email@example.com'); // Replace with test email
  await page.fill('input[name="pass"]', 'your-password'); // Replace with test password
});