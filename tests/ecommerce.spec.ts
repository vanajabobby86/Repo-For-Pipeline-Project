import { test, expect } from '@playwright/test';
import { ProductsPage } from '../Pages/productpage';

test.use({ storageState: 'storageState.json' });

test.describe('Products Page Tests', () => {
  test('Add product to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.navigate('/inventory.html');

    await productsPage.addProductToCart('Sauce Labs Backpack');
    const cartCount = await productsPage.checkcartbag();
    expect(cartCount).toBe(1);
  });
});
