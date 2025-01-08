const express = require("express");
const router = express.Router();
const db = require("../models");
const UserService = require("../services/userService");
const userService = new UserService(db);
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const jsend = require("jsend");
const checkEncryptedPassword = require("../middleware/checkPassword");
router.use(jsend.middleware);

router.get("/", async (req, res, next) => {
  //res.jsend.success({"StatusCode": 200, "Result": "Success"})
  res.render("login", {});
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  const userData = await userService.getUserByEmail(email);
  const user = userData[0];
  console.log("------------------------------");

  //Bootstrap form is checking for empty fields

  if (!user) {
    // Checking if email has a user in the database
    return res.jsend.fail({ StatusCode: 401, Result: "Email not found" });
  }

  const data = await checkEncryptedPassword(password, user.Salt); // get back data: { encryptedPassword, Salt}
  if (!crypto.timingSafeEqual(data.encryptedPassword, user.EncryptedPassword)) {
    return res.jsend.fail({ StatusCode: 401, Result: "Wrong credentials" });
  }

  try {
    let token = jwt.sign(
      {
        id: user.id,
        Email: user.Email,
        Role: user.Role,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "2h" },
    );
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/test");
  } catch (error) {
    return res.jsend.fail({
      StatusCode: 500,
      Result: "Error during login",
      error: error,
    });
  }

  res.end();
});

module.exports = router;
