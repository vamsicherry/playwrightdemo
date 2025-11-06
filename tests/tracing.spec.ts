import { test, expect, devices } from '@playwright/test';


test('tracing', async ({ page,context }) => {

  context.tracing.start({screenshots:true,snapshots:true});
  await page.goto('https://www.demoblaze.com/');
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await page.getByRole('link', { name: 'Log in' }).click();

  await page.locator('#loginusername').fill('pavanol');
 
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
   await page.waitForTimeout(10000);

  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
   
  await page.getByRole('link', { name: 'Log out' }).click();

  context.tracing.stop({path:'trace.zip'});
});