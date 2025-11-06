import { test, expect } from '@playwright/test';

test('handy', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('vamsi');

  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('cherry@gmail.com');
 
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('1234567890');
});