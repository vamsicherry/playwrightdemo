import {test,expect}  from "@playwright/test"


test("validating authenticated popups",async ({browser}) =>{

           /*  const context=await browser.newContext();
             const page=await  context.newPage();
           //https://username:password@the-internet.herokuapp.com/basic_auth
             await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
             await page.waitForLoadState();

             await page.waitForTimeout(4000);

            await expect(page.locator('text=Congratulations')).toBeVisible(); */


            //apprach 2
            const context=await browser.newContext({httpCredentials:{username:'admin',password:'admin'}});
             const page=await  context.newPage();
           //https://username:password@the-internet.herokuapp.com/basic_auth
             await page.goto('https://the-internet.herokuapp.com/basic_auth');
             await page.waitForLoadState();

             await page.waitForTimeout(4000);

            await expect(page.locator('text=Congratulations')).toBeVisible();
})