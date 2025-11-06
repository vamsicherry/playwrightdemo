import {test,expect} from "@playwright/test"
//in typescript we can directly access shadom dom using css selector

test("Handle shadow Dom",async ({page})=>{

     await page.goto('https://books-pwakit.appspot.com/');

     await page.locator('#input').fill("playwright automation");

     await page.keyboard.press('Enter');
     await page.waitForTimeout(5000);
     const bookcount=await page.locator('h2.title').all();

     console.log("boocount",bookcount.length);
   
     expect(bookcount.length).toBe(20);

     
})