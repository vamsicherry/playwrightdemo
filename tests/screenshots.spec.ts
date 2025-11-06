import {test,expect}  from "@playwright/test";


test("Taking Screenshots",async ({page})=>{

     await page.goto('https://demowebshop.tricentis.com/');


     const timestamps=Date.now();
     //visible page window screen
     await page.screenshot({path:'screenshots/'+'Homepage'+timestamps+'.png'});

     //full page
     await page.screenshot({path:'screenshots/'+'fullpage'+timestamps+'.png',fullPage:true})


     //specifice image or locatore
     const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
     await logo.screenshot({path:'screenshots/'+'logoimage'+timestamps+'.png'});

})