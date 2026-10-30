class RegisterPage {
    constructor(page) {
        this.page = page;
        this.RegisterLink = page.getByRole('link', { name: "Register" })
        this.GenderRadioBtn = page.getByText("#gender-female")
        this.First_NameTxt = page.getByLabel("First name:")
        this.Last_NameTxt = page.getByLabel("Last name:")
        this.EmailTxt = page.getByRole('textbox', { name: "Email" })
        this.password = page.locator("#Password")
    }
}
export default RegisterPage; 