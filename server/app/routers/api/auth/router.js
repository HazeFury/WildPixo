const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import auth-related actions
const { login, logout } = require("../../../controllers/authActions");
const { add, getProfile } = require("../../../controllers/userActions");
const {
  hashPassword,
  verifyCookie,
} = require("../../../services/middlewares/auth");

// Route to login the user
router.post("/login", login);

// Route to logout the user
router.get("/logout", logout);

// Route to add a new user
router.post("/register", hashPassword, add);

// Route to get user profile
router.get("/profile", verifyCookie, getProfile);

/* ************************************************************************* */

module.exports = router;
