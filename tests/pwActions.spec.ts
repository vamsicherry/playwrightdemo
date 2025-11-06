import {test,expect,Locator}  from "@playwright/test";

test("Action InputBox",async ({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/")
     
     const namev:Locator=page.locator('#name');
     await expect(namev).toBeVisible();
     await expect(namev).toBeEnabled();
     
     //attribute value check

     const getAtt:string |null=await namev.getAttribute("maxlength");
     expect(getAtt).toBe("15");

     //fill
     await namev.fill("vamsikrishna");

     //want to get the value that we have passed then need to use inputValue() method
    console.log("Input Value Entered:",await namev.inputValue())
    const enteredvalue:string =await namev.inputValue();
    expect(enteredvalue).toBe('vamsikrishna');
    await page.waitForTimeout(3000);
})

test("Action RadioButtons",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    //Radio buttons

     const radio:Locator=await page.locator("#male");
     await expect(radio).toBeVisible();
     await expect(radio).toBeEnabled();

     //to know generally radio button is check or not using ischecked() boolean value

     expect(await radio.isChecked()).toBe(false); //-- true  because it is not check

     await radio.check();  //click check box
    //status  optional
     expect(await radio.isChecked()).toBe(true);
    // or most preferable
     await expect(radio).toBeChecked();
     


})

test.only("Action CheckBox",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    //Radio buttons
 
    //getByLabel() -- method
      const pageLable:Locator= page.getByLabel('Sunday');
     const radio:Locator= page.locator("#sunday");
     
     //element status enable and visible
     await expect(pageLable).toBeEnabled();
     await expect(pageLable).toBeVisible();

     expect(await pageLable.isChecked()).toBe(false);

     await pageLable.check();

     //againcheck wheater element ischecked or not
     
     expect(await pageLable.isChecked()).toBe(true);

     
     await expect(pageLable).toBeChecked(); //check check box is check or not

      await pageLable.uncheck();

   //This avoids strict mode violations and ensures each checkbox gets clicked safely.
     /* const multicheck:Locator= page.locator("//input[@type='checkbox' and @class='form-check-input']");
       const value= await multicheck.count();
      for(let i=0;i<value;i++)
      {   
            const ch=multicheck.nth(i);
          await ch.click();
          await expect(ch).toBeChecked();
      }
      */
    // const checkbox:Locator= page.locator("//input[@type='checkbox' and @class='form-check-input']");
      const checkBox:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      const check:Locator[]= checkBox.map(index => page.getByLabel(index));
      expect(checkBox.length).toBe(7);

     /*  for(const checkboxs of check)
      {
           await checkboxs.check();
           await expect(checkboxs).toBeChecked();
      } */
      
      //click  uncheck boxes elements
     /*  for(const checkboxs of check.slice(-3))
      {
           await checkboxs.uncheck();
           await expect(checkboxs).not.toBeChecked();
      } */
      // if check box is check it should uncheck if uncheck it should check
       
     /*  for(const checkboxs of check) //true
      {
           if(await checkboxs.isChecked()) //ischecked true
           {
               await checkboxs.uncheck();
               await expect(checkboxs).not.toBeChecked();
           }else{
                await checkboxs.check();
                await expect(checkboxs).toBeChecked();
           }
      } */
        await page.waitForTimeout(4000);

    //ramdomly check the array
   /*  const randomcheck:number[]=[1,3,6]
      for(const i of randomcheck)
      {
         await check[i].check();
         await expect (check[i]).toBeChecked();
      } */

    //select checkbox based on the label
     const weekname:string="Monday";

     for(const ho of checkBox)
     {
        if(ho.toLowerCase()===weekname.toLowerCase())
        {
          const currentlabel=page.getByLabel(ho);
           await  currentlabel.check();
           await expect(currentlabel).toBeChecked();

        }

     }

})