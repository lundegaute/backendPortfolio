const express = require("express");
const router = express.Router();
const db = require("../public/user/loginUser");

router.get("/", async ( req, res, next ) => {

    res.render("login", {});
})

router.post("/login", async (req, res, next ) => {
    console.log("We are in here ---------------------")
    const { emailOrUsername, password } = req.body;
    console.log(emailOrUsername);
    res.redirect("/auth");
})

module.exports = router;

