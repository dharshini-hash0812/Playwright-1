class Loginpage {

    constructor(page) {
        this.page = page
        this.loginlink = page.getByRole('link', { name: "Log in" })
        this.emailtext = page.getByRole('textbox', { name: "Email:" })
        this.passtext = page.getByRole('textbox', { name: "Password:" })
        this.loginbtn = page.locator(".button-1.login-button")

    }
    async LoginTDemo() {
        await this.loginlink.click()
        await this.emailtext.fill("shiniyy6@gmailcom")
        await this.passtext.fill("Shiny0812")
        await this.loginbtn.click()
    }


}
export default Loginpage