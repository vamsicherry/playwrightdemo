import {test,expect}  from '@playwright/test';

test('Handling new tab',async ({context})=>{

      const page=await context.newPage();

      await page.goto('https://testpages.eviltester.com/pages/navigation/windows-names/');

      const pagepromise= context.waitForEvent('page');
      await page.getByRole('link',{name:'Window with name in new tab'}).click();
    
      const newpage=await pagepromise;
      await newpage.waitForLoadState('domcontentloaded');
      await newpage.locator('.nav-link',{hasText:'Apps'}).click();

      await newpage.waitForTimeout(4000)

      



})