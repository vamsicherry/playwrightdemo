import {test,Locator,expect}  from "@playwright/test";


test("Handling dialog using alert",async({page})=>{
       
        await page.goto('https://testautomationpractice.blogspot.com/');

        page.on('dialog',dialog =>{

              console.log("Dialog type:",dialog.type())
              expect(dialog.type()).toContain('alert')
              console.log('Dialog message',dialog.message())
              expect(dialog.message()).toContain('I am an alert box!')
              dialog.accept();
             })

         await page.locator("button[onclick='myFunctionAlert()']").click();

})


test("Handling dialog using confirm alert",async({page})=>{
       
        await page.goto('https://testautomationpractice.blogspot.com/');

        page.on('dialog',dialog =>{

              console.log("Dialog type:",dialog.type())
              expect(dialog.type()).toContain('confirm')
              console.log('Dialog message',dialog.message())
              expect(dialog.message()).toContain('Press a button!')
              dialog.accept();
             })

         await page.locator("button[onclick='myFunctionConfirm()']").click();
         let confirmmessageaccept=await page.locator('#demo').innerText();
         expect(confirmmessageaccept).toBe('You pressed OK!');

})


test.only("Handling dialog using prompt alert",async({page})=>{
       
        await page.goto('https://testautomationpractice.blogspot.com/');

        page.on('dialog',dialog =>{

              console.log("Dialog type:",dialog.type())
              expect(dialog.type()).toContain('prompt')
              console.log('Dialog message',dialog.message())
              expect(dialog.message()).toContain('Please enter your name:')
              expect(dialog.defaultValue()).toContain('Harry Potter');
              dialog.accept('vamsi');
             })

         await page.locator("button[onclick='myFunctionPrompt()']").click();
        let confirmmessageaccept=await page.locator('#demo').innerText();
        expect(confirmmessageaccept).toContain('Hello vamsi! How are you today?');
        await page.waitForTimeout(4000);

})