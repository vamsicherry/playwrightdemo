import { test as BaseTest } from '@playwright/test'

type MyFixture = {
     login: ()=>  Promise<void>;
     logout:()=> Promise<void>;
}

export const test = BaseTest.extend<MyFixture>({

     login: async ({ page }, use) => {
          const login = async ()=>{


          await page.goto('https://www.saucedemo.com/');
          await page.locator('[data-test="username"]').fill('standard_user');
          await page.locator('[data-test="password"]').fill('secret_sauce');
          await page.locator('[data-test="login-button"]').click();
          };
          

          await use(login)
          console.log(">>>>>Login Successfull>>>>>>>>")
     },

     logout:async ({page},use)=>
     {
          const logout=async ()=>
          {
          await page.getByRole('button', { name: 'Open Menu' }).click();
          await page.locator('[data-test="logout-sidebar-link"]').click();

          };
          await use(logout);
           console.log(">>>>>Logout Successfull>>>>>>>>")
     }

})

export {expect}  from '@playwright/test';

