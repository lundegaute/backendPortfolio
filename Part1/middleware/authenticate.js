const admin = require("../public/user/loginUser");

const checkUser = {
    admin: (email, password) => {
        if ( email === admin.Email && password === admin.Password) {
            return true;
        } else {
            console.log("Login denied");
            return false;
        }
    }
}

module.exports = checkUser;