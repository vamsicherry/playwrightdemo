import {Page,Locator} from '@playwright/test';


export class CartPage
{
    private page:Page;
   
    private readonly productNameInCart:Promise<Locator[]>;

    constructor(page:Page)
    {
         this.page=page

         this.productNameInCart=this.page.locator('#tbodyid tr td:nth-child(2)').all();
    }

    async checkProductInCart(prodname:string):Promise<boolean>
    {
         const  productincart=  await this.productNameInCart;

         for(const product of productincart)
         { 

           const text= await product.textContent();
           console.log('checkProductInCart',text);
            await product.waitFor({ state: 'visible', timeout: 5000 });
           if(text?.trim().toLowerCase()===prodname.toLowerCase())
           {
              return true;
           }
        }
        return false;
    }
    
    
}