import {test,expect} from '@playwright/test';

//using for of loop

const searchitems:string[]=['laptop','Gift card','smartphone','moniter']
/* for(let item of searchitems){

    test(`search product ${item}`,async({page})=>{

     await page.goto('https://demowebshop.tricentis.com/');
     await page.locator('#small-searchterms').fill(item);
     await page.locator('.button-1').first().click();
     await expect.soft(page.locator('h2 a').first()).toContainText(item,{ignoreCase:true});


})


} */


//using foreach

searchitems.forEach((item)=>{

      test(`search product ${item}`,async({page})=>{

     await page.goto('https://demowebshop.tricentis.com/');
     await page.locator('#small-searchterms').fill(item);
     await page.locator('.button-1').first().click();
     await expect.soft(page.locator('h2 a').first()).toContainText(item,{ignoreCase:true});


})
    

})