class SignupPage{
    username
    password
    re_pass
    f_name
    email_address
    // captchatext
    termscheckbox
    registerbtn
    constructor(){
        this.username='[id="username"]'
        this.password='[id="password"]'
        this.re_password='[id="re_password"]'
        this.f_name='[id="full_name"]'
        this.email_address='[name="email_add"]'
        // this.captchatext='[id="captcha-form"]'
        this.termscheckbox='[id="tnc_box"]'
        this.registerbtn='[id="Submit"]'

    }

}
export default SignupPage