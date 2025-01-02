const express = require("express");
const router = express.Router();
const localUser = require("../public/user/loginUser")
const db = require("../models");
const UserService = require("../services/userService");
const userService = new UserService(db);
const RoleService = require("../services/roleService");
const roleService = new RoleService(db);

router.get("/", async ( req, res, next ) => {
    const user = await userService.getUser("Batman@gmail.com");
    console.log(user)
    console.log("-------------------------")
    console.log(localUser.Email);
    res.render("test", {user: user})
})

module.exports = router;