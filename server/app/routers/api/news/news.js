const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/newsActions");
const {
  verifyCookie,
  verifyIsAdmin,
} = require("../../../services/middlewares/auth");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.patch("/edit", verifyCookie, verifyIsAdmin, edit);

// Route to add a new item
router.post("/add", verifyCookie, verifyIsAdmin, add);

// Route to delete an item
router.delete("/delete", verifyCookie, verifyIsAdmin, destroy);

/* ************************************************************************* */

module.exports = router;
