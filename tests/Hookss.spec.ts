import {test,expect,Page}  from "@playwright/test";
import { execPath } from "process";

let page:Page;
test.beforeAll('before all',async({browser})=>{
       
     page=await browser.newPage();
     await page.goto('https://www.demoblaze.com/');


})

test.afterAll('after all',async ()=>{
        await page.close();

})


test.beforeEach('Login',async ()=>{
        await page.getByRole('link', { name: 'Log in' }).click();
       //await page.locator('#login2').click();
       await page.locator('#loginusername').fill("pavanol");

       await page.locator('#loginpassword').fill('test@123');
       await page.locator('button[onclick="logIn()"]').click();

       await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
       
})
test.afterEach('Logout',async ()=>{
        await page.locator('a[onclick="logOut()"]').click();
       
})

/* test('find number of products',async ()=>{

        const products= page.locator('#tbodyid  h4');
        const count=await products.count();
        expect(count).toBe(9);
})


test('add product to cart',async()=>{

       await  page.locator('text="Samsung galaxy s6"').click();

       page.on('dialog',async (dialog)=>{
       expect(dialog.message).toContain('Product Added');
       await dialog.accept();
           
       })

       await page.locator('a[class="btn btn-success btn-lg"]').click();
})
 */
test.describe("group",async ()=>{

        test('find number of products',async ()=>{

        const products= page.locator('#tbodyid  h4');
        const count=await products.count();
        expect(count).toBe(9);
})


test('add product to cart',async()=>{

       await  page.locator('text="Samsung galaxy s6"').click();

       page.on('dialog',async (dialog)=>{
       expect(dialog.message).toContain('Product Added');
       await dialog.accept();
           
       })

       await page.locator('a[class="btn btn-success btn-lg"]').click();
})

})