let express = require("express");
let router = express.Router();
const auth = require("../middleware/authenticate");

/* GET home page. */
router.get("/", auth.token, auth.isUser, function (req, res, next) {
  res.render("index", { title: "Express", user: req.user });
});

module.exports = router;
