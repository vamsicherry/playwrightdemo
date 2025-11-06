import {test,expect} from "@playwright/test";


test("test1",{tag:'@sanity'},async ({page})=>{

     await page.goto('https://demowebshop.tricentis.com/')
     await expect(page).toHaveTitle('Demo Web Shop')
})



test("test2",{tag:'@reg'},async ({page})=>{

     await page.goto('https://demowebshop.tricentis.com/')
     await expect(page).toHaveTitle('Demo Web Shop')
})



test("test3",{tag:['@sanity,@regression']},async ({page})=>{
     
   
     await page.goto('https://demowebshop.tricentis.com/')
     await expect(page).toHaveTitle('Demo Web Shop')
})

test("test4",{tag:'@regression'},async ({page})=>{
     
   
     await page.goto('https://demowebshop.tricentis.com/')
     await expect(page).toHaveTitle('Demo Web Shop')
})


test.skip("test5",async ({page})=>{
     
    //test.skip(browserName==='firefox','thes step skipped if browser name is firefox')
     await page.goto('https://demowebshop.tricentis.com/')
     //await expect(page).toHaveTitle('Demo Web Shop')
})

test("test6",{tag:'@regression'},async ({page})=>{

     await page.goto('https://demowebshop.tricentis.com/')
     await expect(page).toHaveTitle('Demo Web Shop')
})

