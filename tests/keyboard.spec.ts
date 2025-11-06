import {test,expect} from '@playwright/test';


test("Performing KeyBoard Actions",async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/');

   const typetext=page.locator('#input1');
   
   //we use focus to focus the input field like click
   await typetext.focus();


   //1)inserttext --send the data to keyboard
     await  page.keyboard.insertText("typescript");

  //2)copy the text  ctr+C
     await page.keyboard.down('Control');
     await page.keyboard.press('A')
     await page.keyboard.up('Control');

     //copy the ctr+a
     await page.keyboard.down('Control');
     await page.keyboard.press('C');
     await page.keyboard.up('Control');
    

     //tab 2 time

     await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
     
    // paste
    await page.keyboard.down('Control');
     await page.keyboard.press('V');
     await page.keyboard.up('Control');

     //tab 2 time

     await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
       await page.waitForTimeout(3000);


       // paste
    await page.keyboard.down('Control');
     await page.keyboard.press('V');
     await page.keyboard.up('Control');


     await page.waitForTimeout(5000);

})

test.only("Performing KeyBoard Single click",async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/');

   const typetext=page.locator('#input1');
   
   //we use focus to focus the input field like click
   await typetext.focus();
   
   await page.keyboard.insertText("Typescript")
   await page.keyboard.press('Control+A');
   await page.keyboard.press('Control+C');


   await page.keyboard.press('Tab');
   await page.keyboard.press('Tab');


   await page.keyboard.press('Control+V');

   await page.keyboard.press('Tab');
   await page.keyboard.press('Tab');


   await page.keyboard.press('Control+V');


   await page.waitForTimeout(5000);




   

})