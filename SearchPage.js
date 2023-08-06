class SearchPage{
    Location
    Hotels
    Room_type
    no_ofrooms
    checkindate
    checkoutdate
    adultsper_room
    childper_room
    searchBtn
    constructor(){
        this.Location='[id="location"]'
        this.Hotels='[id="hotels"]'
        this.Room_type='[id="room_type"]'
        this.no_ofrooms='[id="room_nos"]'
        this.checkindate='[id="datepick_in"]'
        this.checkoutdate='[id="datepick_out"]'
        this.adultsper_room='[id="adult_room"]'
        this.childper_room='[id="child_room"]'
        this.searchBtn='[id="Submit"]'
    }
}
export default SearchPage