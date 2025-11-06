import  {test,expect,Locator} from "@playwright/test";


test("Book flight Ticket ",async ({page})=>{

           
        await page.goto("https://blazedemo.com/");

        // Select departure and destination
        await page.locator("[name='fromPort']").selectOption({ value: 'Mexico City' });
        await page.locator("[name='toPort']").selectOption({ value: 'Buenos Aires' });
        await page.locator("input[type='submit']").click();

        // Wait for table to load
        const table = page.locator('.table tbody');
         await expect(table).toBeVisible();

         const rows:Locator[] = await table.locator('tr').all();

         let hightprice =-Infinity;
         let lastrowindex=-1;


         for(let i=0;i<rows.length;i++)
         {
              const cells=await rows[i].locator('td').allInnerTexts();
              const price=cells[cells.length-1];
              let value= parseFloat(price.replaceAll('$',''));

              if(value>hightprice)
              {
                hightprice=value;
                lastrowindex=i;

              }

         }

         if(lastrowindex!==-1)
         {
             const targetrow=table.locator('tr').nth(lastrowindex);
             await targetrow.locator('td').nth(0).click();
         }

       const fulpage:Locator=  page.getByText('Your flight from TLV to SFO has been reserved.');

       const maintext=await fulpage.innerText();
       console.log(maintext);


       //
       await page.getByPlaceholder('First Last').fill("vamsi");
       await page.locator('#address').fill("20-1022");
       await page.locator('#city').fill("Bengalore");
       await page.locator('#state').fill('karnakata');
       await page.locator('#cardType').selectOption({value:'amex'});
        await page.locator('#zipCode').fill('895265');
         await page.getByPlaceholder('Credit Card Number').fill('1234567890');
         await page.getByPlaceholder('John Smith').fill('rock');
        await page.locator(".btn[value='Purchase Flight']").click();
        await page.waitForTimeout(3000);

        const bookticket = page.getByText('Thank you for your purchase today!');
const text = await bookticket.textContent();
console.log("Confirmation message:", text);

        






})