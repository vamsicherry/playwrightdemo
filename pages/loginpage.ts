import {Page,Locator } from '@playwright/test';

export class LoginPage
{
    //variables
   private readonly page:Page;
   private readonly loginLink:Locator;
   private readonly userNameInput:Locator;
   private readonly passwordInput:Locator;
   private readonly loginButton:Locator;

    //constuctor
   constructor(page:Page)
   {
       
    this.page=page;
    this.loginLink=this.page.locator('#login2');
    this.userNameInput=this.page.locator('#loginusername');
    this.passwordInput=this.page.locator('#loginpassword');
    this.loginButton=this.page.locator('button[onclick="logIn()"]');
   }
   
    //action methods

    async clickLoginLink():Promise<void>
    {
         
           await this.loginLink.click();
    }
    async enterUserName(username:string):Promise<void>
    {
          await this.userNameInput.clear();
           await this.userNameInput.fill(username);
    }

    async enterPassword(password:string):Promise<void>
    {
          await this.passwordInput.clear();
           await this.passwordInput.fill(password);
    }

    async clickLoginButton():Promise<void>
    {
         
          await this.loginButton.click();
    }

    async performLoginAction(username:string,password:string):Promise<void>{
         await  this.clickLoginLink();
         await  this.enterUserName(username);
         await  this.enterPassword(password);
         await  this.clickLoginButton();
     }
}