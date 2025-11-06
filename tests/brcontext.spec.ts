import {test,expect,chromium}  from "@playwright/test";


/*
 browser --->context--->pages
 browser--- chromium,firefox,webkit
 context---- we can have multiple context for multiple user from same browser

 page- new Tab,window,popup

 */

 test("broser context",async ()=>{
                  
        const browser=await chromium.launch();
        const context= await browser.newContext();
       console.log("Total NoOf Pages",context.pages());
        const page1=    await context.newPage();
        const page2=await context.newPage();
         
         await page1.goto('https://testautomationpractice.blogspot.com/');
         await page1.waitForTimeout(3000);

         await page2.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
         await page2.waitForTimeout(3000);



 })