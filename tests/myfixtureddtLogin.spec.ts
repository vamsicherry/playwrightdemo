import { test, expect } from '../fixture/TestDatafixture';
test.beforeEach('before',async({page})=>{
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading')).toContainText('Dashboard');

    
})
test('test1', async ({ page ,logindata}) => {
  await page.getByRole('button', { name: 'My Timesheet' }).click();
  await expect(page.locator('form')).toContainText('My Timesheet');

});

test('test2', async ({ page ,adddata}) => {


  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: ' Add' }).click();

  await page.getByRole('textbox', { name: 'First Name' }).fill(adddata.firstnam);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(adddata.lastnam);
  await page.getByRole('textbox').nth(4).clear();
  await page.getByRole('textbox').nth(4).fill(adddata.email);
 
  await page.getByRole('button',{name:' Save '}).click();
  //await expect(page.locator("h6[class^='oxd-text oxd-text--h6 -']")).toBeVisible();
  await expect(page.locator('#app')).toContainText('Personal Details');


})