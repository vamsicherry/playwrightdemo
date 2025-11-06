


// reporter:[['html',{open:'always','outputFolder':'html-report'}]],
import {test,expect} from '@playwright/test';
test("test1",async ({page})=>{

     await page.goto('https://demowebshop.tricentis.com/')
     await expect(page).toHaveTitle('Demo Web Shop')
})



test("test2",async ({page})=>{

     await page.goto('https://demowebshop.tricentis.com/')
     await expect(page).toHaveTitle('Demo Web Sho')
})
