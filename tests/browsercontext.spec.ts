import {test,expect,chromium} from "@playwright/test";



test("Browser context",async ({})=>
{ 
     const browser=await chromium.launch({headless:false});  
     const context=await browser.newContext({
          viewport:{width:1200,height:800},
          //proxy:{server:''}
          ignoreHTTPSErrors:true


     });
     const page=await context.newPage();
     
     await page.goto('https://expired.badssl.com/');
     console.log("title of page",await page.title());

     await page.waitForTimeout(4000);
})
