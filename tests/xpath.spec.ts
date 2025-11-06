import {test,expect,Locator}  from "@playwright/test";
import { TIMEOUT } from "dns";


test("Verify xpaths",async ({page})=>{


     await page.goto("https://demowebshop.tricentis.com/");

      let pagetitle:string=await page.title();
      console.log("PageTitle:",pagetitle)

      let pageUrl:string =page.url();
      console.log("PageUrl:",pageUrl)

      await expect(page).toHaveURL(/demowebshop/)

      //Relative xpath

      await page.locator('//input[@id="small-searchterms"]').fill("vamsi");


       //contains()
        const mulproduct:Locator=page.locator("//h2/a[contains(@href,'computer')]");
        let co:number= await mulproduct.count();
        console.log("Element Count:",co)
        expect(co).toBeGreaterThan(0);

       // console.log(mulproduct.textContent());  //strict mode violation error

        console.log("First Product:",await mulproduct.first().textContent())
        console.log("Last Product:",await mulproduct.last().textContent())
        console.log("nth Product:",await mulproduct.nth(3).textContent())//Index star t from 0
      

       //usint alltextcontent we can get all the values 

       let product:string[]=await mulproduct.allTextContents();

       for(let value of product)
       {
          console.log(value)
       }


       // starts-with
       //page.locator("//a[starts-with(text(),'Register')]").click();
      console.log(">>>>>>>>>>>>>>>>>build>>>>>>>>>>>>>>>>>>>>>>>>>")
       const multibuild:Locator=page.locator("//a[starts-with(text(),'Build')]");
        let buildcount:number= await multibuild.count();
        expect(buildcount).toBeGreaterThan(0);

        console.log("count:",buildcount)

        let mb:string[]= await mulproduct.allTextContents();

        for(let h of mb)
        {
            console.log(h);
        }
     //is visible
        let regelt:Locator= page.locator("//a[starts-with(text(),'Register')]");
        
        let regvisible:boolean= await regelt.isVisible();
        console.log(regvisible)
        await regelt.click();


    // last()
        await expect(page.locator("//div[@class='column follow-us']//li[last()]")).toBeVisible();

        //position()
        await expect(page.locator("//div[@class='column follow-us']//li[position()=4]")).toBeVisible();


        


      


      

      


})