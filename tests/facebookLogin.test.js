const { test, expect } = require('@playwright/test');
const { FacebookLoginPage } = require('../pages/FacebookLoginPage');

test.describe('Facebook Login Tests', () => {
    test('User should see an error message on incorrect login', async ({ page }) => {
        const loginPage = new FacebookLoginPage(page);
        await loginPage.goto();

        await loginPage.login('wrongemail@example.com', 'wrongpassword');  // Replace with incorrect details

        // Wait for the error message to appear
        // const errorMessage = page.locator('._9ay5'); // Updated selector
        // await expect(errorMessage).toBeVisible({ timeout: 10000 });  // Increased timeout to 10s
        const errorMessage = page.locator('text="The email address you entered isn\'t connected to an account."');
        await expect(errorMessage).toBeVisible();

    });
});
