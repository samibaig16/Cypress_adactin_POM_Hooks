class BookingPage{
    firstname
    lastname
    billingaddress
    cc_no
    cc_type
    cc_exp_month
    cc_exp_year
    ccv_no
    booknowBtn
    LogoutBtn
    constructor(){
        this.firstname = '[id="first_name"]'
        this.lastname = '[id="last_name"]'
        this.billingaddress = '[id="address"]'
        this.cc_no = '[id="cc_num"]'
        this.cc_type = '[id="cc_type"]'
        this.cc_exp_month = '[id="cc_exp_month"]'
        this.cc_exp_year = '[id="cc_exp_year"]'
        this.ccv_no = '[id="cc_cvv"]'
        this.booknowBtn = '[id="book_now"]'
        this.LogoutBtn = '[name="logout"]'
    }
}
export default BookingPage