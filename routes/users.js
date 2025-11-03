const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const router = express.Router({ mergeParams: true });
const userController = require("../controllers/users.js");
const { saveRedirectUrl } = require("../middleware.js");

router
  .route("/signup")
  .get(userController.signupForm)
  .post(wrapAsync(userController.postSignup));

router
  .route("/login")
  .get(userController.loginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.postLogin,
  );

router.get("/logout", userController.logout);

module.exports = router;
