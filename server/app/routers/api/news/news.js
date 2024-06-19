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

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.patch("/edit", edit);

// Route to add a new item
router.post("/add", add);

// Route to delete an item
router.delete("/delete", destroy);

/* ************************************************************************* */

module.exports = router;
