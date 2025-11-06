import {test,expect} from '@playwright/test';
import AxeBuilder  from '@axe-core/playwright';

test("Accessibility testing",async ({page},testInfo)=>{


      //await page.goto('https://demowebshop.tricentis.com/register')
      await page.goto('https://www.w3.org/')
     //1)all types of violations........
      const accessilitychecks=await new AxeBuilder({page}).analyze();
     // console.log('============>no of violations=========',accessilitychecks)

       expect(accessilitychecks.violations.length).toEqual(0);

       //2)specific type of violations....


      // const accessilitychecks=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
    //   console.log('============>no of violations=========',{
    //                            body:JSON.stringify(accessilitychecks,null,2),
    //                            contentType:'application/json'

    //   });


     /*  await testInfo.attach("acccesibily checks",{
                    body:JSON.stringify(accessilitychecks,null,2),
                    contentType:'application/json'
      }) */

     console.log("accesschecks",accessilitychecks.violations.length)
       expect(accessilitychecks.violations.length).toEqual(0);






})