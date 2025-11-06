import  {test,Locator,expect} from "@playwright/test";

test("Dynamic Page table",async ({page})=>{
      
        await page.goto("https://practice.expandtesting.com/dynamic-table");
         const table:Locator=page.locator('table.table tbody');
        await expect(table).toBeVisible();
        //1>) row count
        const allrows:Locator[]=await table.locator('tr').all();
          expect(allrows)
        console.log(allrows.length);

        expect(allrows).toHaveLength(4);

        //2)chrome process get the value of cpu
      let CPUvalue='';
        for(let row of allrows)
        {
           //const  allval:string[]=await row.locator('td').allInnerTexts();
           const allval=await row.locator('td').nth(0).innerText();

           //const name=allval[0];

           if(allval==='Chrome')
           {
             CPUvalue=await row.locator('td',{hasText:'%'}).innerText();
             console.log(CPUvalue);
             break;
             
             

           }

        }

      const vam:string=await page.locator('#chrome-cpu').innerText();
        console.log(vam);
      if(vam.includes(CPUvalue))
      {
          console.log("cpu load is equal")
      }else{
        console.log("load not equal")

      }

    //tocontain -- assertion in ts
      expect(vam).toContain(CPUvalue);
      /* const  mainvalue:string=vam.split(':')[1].trim();
      
      console.log(vam)
      console.log(mainvalue)
      await page.waitForTimeout(4000);

       expect(mainvalue).toBe(CPUvalue); */


})


test("Memory Size of Firefox process: ",async ({page})=>{


      await page.goto("https://testautomationpractice.blogspot.com/");

      const tabless:Locator=page.locator('#taskTable tbody');
      await expect(tabless).toBeVisible();

      //1)Rows of the table
      const tablessrow:Locator[]=await tabless.locator('tr').all();
      expect(tablessrow).toHaveLength(4);


      
      

      //2)Memory Size of Firefox process:
      let mbss='';
      for(let rowsss of tablessrow)
      {

           const name=await rowsss.locator('td').nth(0).innerText();
           if(name==='Firefox')
           {
               const allcells= await rowsss.locator('td').allInnerTexts();
                for(let val of allcells)
                {
                    if(val.includes('MB') && !val.includes('MB/s') && !val.includes('Mbps'))
                    {
                        mbss=val;
                        console.log(mbss);
                        break;
                    }
                }
                break;
             

           }
          
       }
       console.log("Value foound",mbss);
       const networkvalue=await page.locator('.display-values p:nth-of-type(2)').innerText();
       console.log("networvalue",networkvalue)

       expect(networkvalue).toContain(mbss);

       if(( networkvalue).includes(mbss))
       {
         console.log("Mbs found")
       }else{
        console.log('Mbs not found')
       }
      


})



test.only("Network speed of Chrome process:  ",async ({page})=>{


      await page.goto("https://testautomationpractice.blogspot.com/");

      const tabless:Locator=page.locator('#taskTable tbody');
      await expect(tabless).toBeVisible();

      //1)Rows of the table
      const tablessrow:Locator[]=await tabless.locator('tr').all();
      expect(tablessrow).toHaveLength(4);


      //2)]
      let mbpps='';
       for(let col of tablessrow)
       {
           
        const name=await col.locator('td').nth(0).innerText();
         
        if(name==='Chrome')
        {
               mbpps=await col.locator('td',{hasText:'Mbps'}).innerText();
               console.log(mbpps);
         }
        
        }
      console.log(mbpps);

      const networkspeed=await page.locator('.display-values p:nth-of-type(3)').innerText();

      expect(networkspeed).toContain(mbpps);

})

