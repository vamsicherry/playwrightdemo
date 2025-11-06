import {test,expect} from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
test("Accessibility Testing",async({page},testInfo)=>{

    await page.goto('https://www.w3.org/');
    //1)Accessibiliyt check for entire page

    /* const accesscheckschecks=await new AxeBuilder({page}).analyze();
    console.log(accesscheckschecks)
    expect(accesscheckschecks.violations.length).toEqual(0); */


    //2)for particular pages webcontent accessibality guidness
    //wcag2a wcag2aa wcag21a wcag21aa


    const access= await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();

    console.log(access);

    testInfo.attach("Accessibality checks",{

             body:JSON.stringify(access,null,2),
             contentType:'application/json'
    })

    expect(access.violations.length).toEqual(0);
    console.log("violation checks count===>",access.violations.length)



    


    



})