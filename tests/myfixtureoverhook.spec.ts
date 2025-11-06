import { log } from 'console';
import { test, expect } from '../fixture/Hookfixture';

test('test1 ', async ({ page,login,logout }) => {
  await login();
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  await page.locator('[data-test="item-1-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Bolt T-Shirt');
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').fill('charan');
  await page.locator('[data-test="lastName"]').fill('s');
  await page.locator('[data-test="postalCode"]').fill('517006');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');

  await logout();
});

test('test2', async ({ page,login,logout }) => {

  await login();
  await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
  await page.locator('[data-test="item-5-title-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Fleece Jacket');
  await page.locator('[data-test="remove-sauce-labs-fleece-jacket"]').click();
  await logout();

})