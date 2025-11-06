import {test,expect,Locator} from  "@playwright/test";

test("Dynamic elements",async ({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")
/* 
    for(let i=0;i<=5;i++)
    {
       let dyn:Locator= page.locator('//button[text() ="START" or text()="STOP"]');
       await dyn.click();

       await page.waitForTimeout(3000);
    } */


       for(let i=0;i<=5;i++)
    {
       let dyn:Locator= page.getByRole('button',{name: /START|STOP/ });
       

       await dyn.click();

       await page.waitForTimeout(3000);
    }


})