import { Page, Locator, expect, test } from '@playwright/test';

export class HomePage {
  private readonly page: Page;
  private readonly welcomeName: Locator;
  private readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeName = this.page.locator('#nameofuser');
    this.cartLink = this.page.locator('#cartur');
  }

  async checkWelcomeName(): Promise<string> {
    await test.step('Check welcome name is visible', async () => {
      await this.welcomeName.waitFor({ state: 'visible', timeout: 5000 });
    });
    return await this.welcomeName.innerText();
  }

  async checkAllProducts(productName: string): Promise<void> {
    await test.step(`Click on product: ${productName}`, async () => {
      const productLocator = this.page.locator('div#tbodyid div.card h4.card-title a');
      const products = await productLocator.all();

      for (const product of products) {
        const text = await product.textContent();
        console.log('Found product:', text?.trim());

        if (text?.trim().toLowerCase() === productName.toLowerCase()) {
          console.log(`Clicking on product: ${text}`);
          await product.waitFor({ state: 'visible', timeout: 5000 });
          await Promise.all([
            this.page.waitForURL(/prod\.html/, { timeout: 5000 }),
            product.click()
          ]);
          break;
        }
      }
    });
  }

  async clickOnAddToCart(): Promise<void> {
    await test.step('Click on Add to cart button', async () => {
      this.page.once('dialog', async (dialog) => {
        console.log('Alert message:', dialog.message());
        await dialog.accept();
      });

      const addToCart = this.page.locator('a:has-text("Add to cart")');
      await addToCart.waitFor({ state: 'visible', timeout: 5000 });
      console.log('Clicking Add to cart button...');
      await addToCart.click();
    });
  }

  async goToCart(): Promise<void> {
    await test.step('Navigate to cart page', async () => {
      await this.cartLink.click();
    });
  }
}
