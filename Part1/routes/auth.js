const express = require("express");
const router = express.Router();
const user = require("../public/user/loginUser");
const checkUser = require("../middleware/authenticate");
router.get("/", async ( req, res, next ) => {

    res.render("login", {});
})

router.post("/login", async (req, res, next ) => {
    const { emailOrUsername, password } = req.body;
    console.log(user)
    if ( checkUser.admin(emailOrUsername, password) ) {
        console.log("Login good");
        res.redirect("/test")
    } else {
        console.log("Login bad")
        res.redirect("/auth");
    }
    
})

module.exports = router;

