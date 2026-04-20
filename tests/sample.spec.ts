import { test, expect } from '@playwright/test';

test('Facebook login', async ({ page }) => {
  await page.goto('https://www.facebook.com');
  await page.fill('[data-testid="royal_email"]', 'your-email@example.com'); // Replace with test email
  await page.fill('[data-testid="royal_pass"]', 'your-password'); // Replace with test password
  await page.click('[data-testid="royal_login_button"]');
  await expect(page).toHaveURL(/facebook.com/); // Adjust assertion as needed
});