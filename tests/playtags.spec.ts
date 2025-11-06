import { test, expect } from '@playwright/test';

test('test1', { tag: '@sanity' }, async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page).toHaveTitle('Automation Testing Practice');
  await expect(page.locator('text="Automation Testing Practice"')).toBeVisible();
  const time=Date.now();

  //await  page.screenshot({path:'screenshots/'+'homepage'+time+'.png'});

  await page.screenshot({path:'screenshots/'+'fullpage'+time+'.png',fullPage:true})
});

test('test2', { tag: '@reg' }, async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page).toHaveTitle('Automation Testing Practice');
  await expect(page.locator('text="Automation Testing Practice"')).toBeVisible();
});

test('test3', { tag: ['@sanity', '@reg'] }, async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page).toHaveTitle('Automation Testing Practice');
  await expect(page.locator('text="Automation Testing Practice"')).toBeVisible();
  console.log('sanity and regression');
});

test('test6', { tag: '@reg' }, async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await expect(page).toHaveTitle('Demo Web Shop');
});
