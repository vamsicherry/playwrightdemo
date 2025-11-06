import  {test,expect,Locator}  from  "@playwright/test"  


test("Verify playwright Locators",async ({page})=>{

        await page.goto("https://tutorialsninja.com/demo/")
       /* await page.goto("https://demos.nop-templates.com", {
  timeout: 60000,
  waitUntil: "domcontentloaded"
}); */

        //1...check the logo is visible -getByAltText()---
        let noplogo:Locator=page.getByAltText("Qafox.com")

        await expect(noplogo).toBeVisible();

        //2...getByText() will get the text from non interactive elements
        //use regular expression start / and end / in space \s+ and case sensitive use i

       // await expect(page.getByText("Welcome to our store")).toBeVisible();

        await expect(page.getByText(/Featured/i)).toBeVisible();


        //3..getByRole()  it is not a attribure 
        //role locator includes button,checkbox,links,list,heading table,etc..
        //w3c specification for Aria role

        //  await page.getByRole('link',{name:'Register'}).click();
        // await  expect(page.getByText(/Register/i)).toBeVisible()

         await page.getByRole('link',{name:'My Account'}).click();
         await page.getByRole('link',{name:'Register'}).click();

        //await expect(page.getByRole('heading', { name: /register/i })).toBeVisible();


         //await expect(page.getByRole('heading',{name:'Register'})).toBeVisible();
})


