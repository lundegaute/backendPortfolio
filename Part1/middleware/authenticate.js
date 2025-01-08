const jwt = require("jsonwebtoken");

const auth = {
  token: (req, res, next) => {
    let token;
    if (req.cookies.token) {
      token = req.cookies.token;
    } else {
      //res.jsend.fail({"StatusCode": 500, "Result": "Token not found"})
      res.redirect("/auth");
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        res.redirect("/auth");
        //res.jsend.fail({"StatusCode": 500, "Results": "Token not authorized"})
      } else {
        req.user = decodedToken;
        console.log(req.user);
        next();
      }
    });
  },

  isUser: (req, res, next) => {
    if (req.user.Role === "User" || req.user.Role === "Admin") {
      next();
    } else {
      res.redirect("/auth");
      //res.jsend.fail({"StatusCode": 500, "Results": "Unauthorized access"})
    }
  },

  isAdmin: (req, res, next) => {
    if (req.user.Role === "Admin") {
      next();
    } else {
      res.jsend.fail({ StatusCode: 500, Results: "Unauthorized access" });
    }
  },
};

module.exports = auth;
