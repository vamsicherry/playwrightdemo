import {test,expect} from '@playwright/test';

//first is name of class
/* import {LoginPage} from   '../pages/loginpage';
import {HomePage}  from   '../pages/homepage';
import {CartPage}  from   '../pages/cartpage';


test('User can login and add product to cart',async ({page})=>{
test.slow();
    await page.goto('https://www.demoblaze.com/index.html')
    //loginpage
    const loginp=new LoginPage(page);

    await loginp.performLoginAction('pavanol','test@123');
  
    //homepage
    const homep= new HomePage(page);
    const wlname= await  homep.checkWelcomeName();
     page.setDefaultTimeout(2000);
     expect(wlname).toBe('Welcome pavanol');
     await homep.checkAllProducts('Iphone 6 32gb');

     await homep.clickOnAddToCart();

     await homep.gotocart();

     //cartpage

     const cartp= new CartPage(page);

     const productexist=await cartp.checkProductInCart('Iphone 6 32gb');

      if(productexist===true)
     {
          console.log('Iphone 6 32gb is found')
     }else{
                console.log('Not found')
     } 

     expect(productexist).toBeTruthy();



        
}) */


     
import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homepage';
import { CartPage } from '../pages/cartpage';

test('User can login and add product to cart', async ({ page }) => {
  test.slow();
  await page.goto('https://www.demoblaze.com/index.html');

  const loginp = new LoginPage(page);
  await loginp.performLoginAction('pavanol', 'test@123');

  const homep = new HomePage(page);
 const wlname = await homep.checkWelcomeName();
  expect(wlname).toBe('Welcome pavanol');
  await page.waitForTimeout(2000)

  await homep.checkAllProducts('Iphone 6 32gb');
  await page.waitForTimeout(2000)
  await homep.clickOnAddToCart();
  await page.waitForTimeout(2000)
  await homep.goToCart();
    await page.waitForTimeout(9000)
  const cartp = new CartPage(page);
  const productExist = await cartp.checkProductInCart('Iphone 6 32gb');

   expect(productExist).toBeTruthy();
});
