import {test,expect,Locator} from "@playwright/test";
import { count } from "console";


test("Hidden DropDown With Autosuggest DropDown",async ({page})=>{

     await page.goto("https://www.flipkart.com/");
     const searchProduct:Locator= page.locator("input[name=q]");
     await searchProduct.fill("smart");
      await page.waitForTimeout(3000);
     const searchCount:Locator=page.locator("ul>li>div>a");
      //ctrl+shift+p
      ///runcmd emulate a focusef page  and after used stop that

     const cont=await searchCount.count();
     /* const allsuggestoptions:string[]=await searchCount.allTextContents();

     for(let i=0;i<cont;i++)
     {
         console.log(`Product Results: ${allsuggestoptions[i]}`);
         if(allsuggestoptions.includes('mobiles 5gin Mobiles'))
         {
             const val=searchCount.nth(i);
             await val.click();
             break;
         }
     } */


    for (let i=0;i<cont;i++)
    {
          const txt=await searchCount.nth(i).textContent();
          if(txt==='smartphone')
          {
            await searchCount.nth(i).click();
            break;
          }
    }
     await page.waitForTimeout(3000);


    

})


test("BootstrapDrop down",async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("admin123");
    await page.getByRole('button',{name:' Login '}).click();

    await page.getByText('PIM').click();

    await page.locator('form>div i').nth(2).click();

    await page.waitForTimeout(3000);
    const alljobs:Locator=page.locator('.oxd-select-option');

    const jobcoun=await alljobs.count();

    console.log("JobCount:",jobcoun)

    for(let i=0;i<jobcoun;i++)
    {
         const text=await alljobs.nth(i).innerText();
         console.log("JobRole:",text)
         if(text==='QA Lead')
         {
              await alljobs.nth(i).click();
              break;
         }
    }

await page.waitForTimeout(3000);

})


test.only("LabAssignemt Mynthra",async ({page})=>{

    await page.goto("https://www.myntra.com/shop/women");

    await page.getByPlaceholder('Search for products, brands and more').fill('Mobiles');
    await page.waitForTimeout(3000);
    const myntrasearch:Locator=page.locator('.desktop-group li');
    
    const mycount=await myntrasearch.count();
    console.log(mycount);

    for(let i=0;i<mycount;i++)
    {
          const mytext= await myntrasearch.nth(i).textContent();
          console.log(mytext)


    }
    await page.waitForTimeout(3000);

})