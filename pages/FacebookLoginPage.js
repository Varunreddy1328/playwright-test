class FacebookLoginPage {
    constructor(page) {
        this.page = page;
        this.emailField = '[name="email"]';  // Facebook email input
        this.passwordField = '[name="pass"]';  // Facebook password input
        this.loginButton = '[name="login"]';  // Facebook login button
    }

    async goto() {
        await this.page.goto('https://www.facebook.com/');  // Open Facebook login page
    }

    async login(username, password) {
        await this.page.fill(this.emailField, username);  // Enter email
        await this.page.fill(this.passwordField, password);  // Enter password
        await this.page.click(this.loginButton);  // Click login button
    }
}

module.exports = { FacebookLoginPage };
