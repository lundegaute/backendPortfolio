const express = require("express");
const router = express.Router();
const db = require("../models");
const UserService = require("../services/userService");
const userService = new UserService(db);
const RoleService = require("../services/roleService");
const roleService = new RoleService(db);
const auth = require("../middleware/authenticate");

router.get("/", auth.token, auth.isUser, async (req, res,) => {
  console.log(req.user);
  res.render("test", { user: req.user });
});

module.exports = router;
