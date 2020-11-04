export const ApiPath = {
    BASE_URL: "http://b59616f40a80.ngrok.io/api/",
    REGISTER: "auth/customer/mobileRegistration",
    OTP_VERIFICATION: "auth/customer/otpVerification",
    PROFILE_UPDATE: "auth/customer/profileUpdate",
    LOGIN: "auth/customer/login",
    COSMETOLOGIST_REGISTER: "auth/cosmetologist/mobileRegistration",
    COSMETOLOGIST_PROFILE_UPDATE: "auth/cosmetologist/profileUpdate",
    COSMETOLOGIST_SHOP_PROFILE: "appointments/cosmetologist/shopDetailInsert",
    COSMETOLOGIST_LOGIN: "auth/cosmetologist/login",
    DEFAULT_SERVICE: "appointments/defaultServices/list"
}
export const Method = {
    GET: "get",
    POST: "post",
    DELETE: "delete",
    PUT: "put",
}
export const Constants = {
    
}

export const footerMenus = [
    { key: 'home', label: 'Home', value: 'ClientHome', icon: require('_assets/home.png')},
    { key: 'new_appointment',label: 'New Appointment', value: 'NewAppointment', icon: require('_assets/new_appointment.png')},
    { key: 'appointments',label: 'Appointments', value: 'Appointments', icon: require('_assets/appointments.png')},
    { key: 'favourites',label: 'Favourites', value: 'Favourites', icon: require('_assets/favourites.png')},
]

export const footerMenusForServiceProvider = [
    { key: 'home', label: 'Home', value: 'Home', icon: require('_assets/home.png')},
    { key: 'appointments',label: 'Appointments', value: 'Appointment', icon: require('_assets/appointments.png')},
    { key: 'allotments',label: 'Allotments', value: 'Allotments', icon: require('_assets/availableSlots.png')},
    { key: 'metrices',label: 'Metrices', value: 'Metrices', icon: require('_assets/metrics.png')},
    { key: 'market', label: 'Market', value: 'Market', icon: require('_assets/shoppingCard.png')},
]

export const ColorList = ['purple', 'green', 'yellow', 'red', 'blue']