import {test,expect,Locator} from '@playwright/test';


test("Train Ticket Booking",async ({page})=>{
         

     await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

     await page.locator('.opc-radio-list-label').last().click();
     const SelectedPrice=await  page.locator("span[itemprop='price']").last().innerText();
     console.log("Selected Price:",SelectedPrice);

     await page.locator('#travname').fill('rock');

     await page.locator('#travlastname').fill('rocky');

     const dobisvisible:Locator= page.locator('#dob');
     expect(dobisvisible).toBeVisible();

     await dobisvisible.click();

     await page.locator('.ui-datepicker-month').selectOption({value:'11'});
     await page.locator('.ui-datepicker-year').selectOption({value:'1999'})
    
     const days:Locator[]=await page.locator('.ui-datepicker-calendar tbody  tr td a').all();
     let d='21';
     for(let value of days)
     {
         let day=await value.innerText();
         if(day===d)
         {
            await  value.click();
         }
        
    }
    await page.locator('#sex_1').click();

    await page.locator('#fromcity').fill('Bengalore');

    await page.locator('#tocity').fill('andhrapradesh');

    await page.locator('#billing_phone').fill('8985660963');

    await page.locator('#billing_email').fill('rockrocky@gmail.com');

    await page.locator('#billing_city').fill('mpstate');

    await page.locator('#billing_postcode').fill('560110');
    await page.waitForTimeout(2000);
    let finalprice:string=await page.locator('.order-total  td bdi').innerText();
    let cts:string=finalprice.replaceAll('₹','');

    expect(cts).toBe('990');


     
})