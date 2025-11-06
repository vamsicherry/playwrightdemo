import {test,expect} from "@playwright/test";


const loginTestData:string[][] =[
    ['laura.taylor1234@example.com','test123','valid'],
    ['laura.taylor14@example.com','test123','invalid'],
    ['laura.taylor1@example.com','test123','invalid'],
    ['','','invalid'],
];

for(const [email,pass,validaty] of loginTestData )
{


  test.describe(`Login data driven`,async()=>{

     test(`test data ${email} and ${pass}`,async ({page})=>{

          await page.goto('https://demowebshop.tricentis.com/login');

          await page.locator('#Email').fill(email);
          await page.locator('#Password').fill(pass);
          await page.locator("input[value='Log in']").click();

          if(validaty === 'valid')
          {
              const logoutpage=page.locator('.ico-logout');
              await expect(logoutpage).toBeVisible({timeout:1000});

          }else{

              const errormessage=page.locator('.validation-summary-errors');
              await expect(errormessage).toBeVisible({timeout:1000});

              //
              await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
          }

})
})
}

