import {test,expect}  from '@playwright/test';

test('test3', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/register');
   /* //expect(await page.screenshot()).toMatchSnapshot('homepage.png');


   //approach 2
   await expect(page).toHaveScreenshot();


   //capture particular element  */


   //capture of particular element

   const logo= page.locator('.ico-register');
   expect(await page.screenshot()).toMatchSnapshot('register.png');

  console.log('snapshot is cheked');
});