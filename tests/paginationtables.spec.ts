import {test,expect,Locator}  from "@playwright/test";

test("Pagination table to Read all the data",async ({page})=>{
    
        await page.goto("https://datatables.net/");

  let nextPage=true;
    

  while(nextPage)
  {

     const allpages:Locator[]=await page.locator('#example tbody tr').all();

     console.log(allpages.length)

     for(let value of allpages)
     {
           console.log(await value.innerText());
     }
    await page.waitForTimeout(2000);
     //button[aria-label='Next']

     const next:Locator= page.locator("button[aria-label='Next']");

     const attributeval=await next.getAttribute("class");//dt-paging-button disabled next

     if(attributeval?.includes('disabled'))
     {
          nextPage=false;
          
     }else{
           await next.click();
     }


    

  }



})
test("Filter the rows and check row count",async ({page})=>{
    
        await page.goto("https://datatables.net/");

        const selectdrop:Locator=page.locator('#dt-length-0');

        await selectdrop.selectOption({label:'50'});
        await page.waitForTimeout(3000);
         const all:Locator[]=await page.locator('#example tbody tr').all();
         console.log(all.length);

         expect(all.length).toBe(50);




})

test.only("Search for specific product",async ({page})=>{
    
        await page.goto("https://datatables.net/");

        const selectdrop:Locator=page.locator('#dt-search-0');

        await selectdrop.fill('Paul Byrd');
        await page.waitForTimeout(3000);
        const rows:Locator[]=await page.locator('#example tbody tr').all();

        if(rows.length>0)
        {
            let ismatchfound=false;

            for(let row of rows)
            {
              const rowtext=await row.innerText();

              if(rowtext.includes('Paul Byrd'))
              {
                    
                    console.log("Recodrd exists",rowtext);
                    ismatchfound=true;
                    break;

              } 

              if(!ismatchfound)
              {
                   console.log("Records not found in filtered rows")
              }
              
            }
            
        }else{
                 console.log("No rows found after filtering");
            }

        
})




