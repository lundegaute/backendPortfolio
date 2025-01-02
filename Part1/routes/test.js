const express = require("express");
const router = express.Router();
const db = require("../public/user/loginUser")

router.get("/", async ( req, res, next ) => {
    console.log(db.user)
    res.render("test", {user: "Gaute"})
})

module.exports = router;