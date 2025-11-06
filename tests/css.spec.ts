//

import  {test,expect,Locator}  from "@playwright/test";

test("Verify Locators",async ({page})=>{
      
         await page.goto("https://demowebshop.tricentis.com/")
         //1)tag#id 

        /* const search:Locator= page.locator("input#small-searchterms");
        
        await search.fill("vamsi"); */

         //2)...tag.class

         //await page.locator('input.search-box-text').fill("T-shirts");
       
        //3)...tag[attribute=value]   input.search-box-text[type=text]
        //input[name=q]
        // await page.locator('input[name=q]').fill("T-shirts");

        //4)....class with attribue name
         await page.locator('input.search-box-text[type=text]').fill("T-shirts");
         await page.waitForTimeout(3000)
         //5)absolute xpath 
         page.goto("https://testpages.eviltester.com/styled/page?app=testpages&t=About")

         page.locator('html>body>div>div>h1[id=about-testpages]');

         //html>body>div>*:last-child
         //html>body>div>*:first-child
         //html>body>div>*:nth-child(5)

         

         


})