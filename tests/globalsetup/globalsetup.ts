// import {test,expect} from '@playwright/test';


// test('Global Login setup',async ({page})=>{

//       await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
//       await page.locator("input[name='username']").fill('Admin');
//       await page.locator("input[name='password']").fill('admin123');
//       await page.locator("button[type='submit']").click();
//       await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
//       await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
//       await page.context().storageState({path:'./playwright/.auth/auth.json'});

// })