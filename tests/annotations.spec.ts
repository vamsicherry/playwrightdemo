import {test,expect} from "@playwright/test";


test("test1",async ({page})=>{

     await page.goto('https://demowebshop.tricentis.com/')
     await expect(page).toHaveTitle('Demo Web Shop')
})



test.skip("test2",async ({page})=>{

     await page.goto('https://demowebshop.tricentis.com/')
     await expect(page).toHaveTitle('Demo Web Shop')
})



test("test3",async ({page,browserName})=>{
     
    test.skip(browserName==='firefox','thes step skipped if browser name is firefox')
     await page.goto('https://demowebshop.tricentis.com/')
     await expect(page).toHaveTitle('Demo Web Shop')
})

test.fail("test4",async ({page,browserName})=>{
     
    test.skip(browserName==='firefox','thes step skipped if browser name is firefox')
     await page.goto('https://demowebshop.tricentis.com/')
     await expect(page).toHaveTitle('Demo Web Shop')
})


test.fixme("test5",async ({page,browserName})=>{
     
    test.skip(browserName==='firefox','thes step skipped if browser name is firefox')
     await page.goto('https://demowebshop.tricentis.com/')
     //await expect(page).toHaveTitle('Demo Web Shop')
})

test("test6",async ({page,browserName})=>{
     test.slow();//triple the default timeout 30 sec to 90 sec
     
    test.skip(browserName==='firefox','thes step skipped if browser name is firefox')
     await page.goto('https://demowebshop.tricentis.com/')
     await expect(page).toHaveTitle('Demo Web Shop')
})

