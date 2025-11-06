import {test,Locator,expect,Page}  from "@playwright/test";
async function  datepicker(ddate:string,dmonth:string,dyear:string,page:Page)
{
    while(true)
       {

         const currentmonth:string=await page.locator('.ui-datepicker-month').innerText();
        
         const currentyear:string=await page.locator('.ui-datepicker-year').innerText();

         if(currentmonth===dmonth  && currentyear===dyear)
         {
               break;
         }

          //await page.locator('a[data-handler=next]').click(); //future
          await page.locator('a[data-handler=prev]').click();  //past
        }

         const currentday:Locator[]= await page.locator('.ui-datepicker-calendar tr td a').all();

         for(let value of currentday)
         {
              const dayss=await value.innerText();
              if(dayss===ddate)
              {
                   value.click();
              }
        
                       
         }
        

}
test("DatePicker ,....",async ({page})=>{

       await page.goto("https://testautomationpractice.blogspot.com/")

       await page.locator('#datepicker').click();
       let date='12';
       let year='2020';
       let month='October';
       await datepicker(date,month,year,page);
       

         
        
})


test("date picker using fill",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

     await page.locator('#start-date').fill('2026-10-09');

     await page.locator('#end-date').fill('2026-12-21');

     await page.locator('button[class=submit-btn]').click();

     await page.waitForTimeout(3000);


})


test.only("Check in date",async ({page})=>{

       await page.goto('https://www.booking.com/');
       await  page.waitForTimeout(5000)
       await page.getByTestId('searchbox-dates-container').click();
       const  dd:string= await page.locator("h3[aria-live='polite']").nth(0).innerText();

        const cmonth=  dd.split(" ")[0];
        const cyear= dd.split('1');
        console.log(cmonth,cyear);


})