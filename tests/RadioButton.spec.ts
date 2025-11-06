import {test,expect,Locator}  from "@playwright/test";

test("Radio Buttons Checks",async ({page})=>{


      await page.goto("https://testautomationpractice.blogspot.com/");
     
      //1.)Select the Single CheckBox
       
       /* const  loc:Locator = page.locator('#sunday');
       await expect(loc).toBeVisible();
       await expect(loc).toBeEnabled();
       await loc.check();
       await expect(loc).toBeChecked(); */

       //2.) Select all the check Boxes

        const allcheckboxes:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const checkBoxs:Locator[]=allcheckboxes.map(index =>page.getByLabel(index));

        /* for(const checkbox of checkBoxs)
        {
             await checkbox.check();
             await expect(checkbox).toBeChecked();
        } */

       //3)check last three elements

        /* for(const checkbox of checkBoxs.slice(-3))
        {
             await checkbox.check();
             await expect(checkbox).toBeChecked();
        } */

        //4)If CheckBox is notcheck it should check and if checked it should un check

        /* for(const checkbox of checkBoxs)
        {
             if(await checkbox.isChecked()) //If it becomes true then it is check need to uncheck
             {
                    await checkbox.uncheck();
                    await expect(checkbox).not.toBeChecked();
             }else{
                    await checkbox.check();
                    await expect(checkbox).toBeChecked();
             }
        } */

        //5)check basd on string

             /* const randomvalue:string='Saturday'

             for(const value of allcheckboxes)
             {
                 if(value.toLocaleLowerCase()===randomvalue.toLowerCase())
                 {
                     const currentvalue=page.getByLabel(value);
                     await currentvalue.check();
                     await expect(currentvalue).toBeChecked();

                 }
             } */


          //6)Check Random values
            const index:number[]=[1,4,3];
            for(const i of index)
            {
             
                 await checkBoxs[i].check();

                 await expect(checkBoxs[i]).toBeChecked();
            }



      
        await page.waitForTimeout(3000);



})