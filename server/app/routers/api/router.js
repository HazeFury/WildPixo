const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const gameRouter = require("./games/router");

router.use("/items", itemsRouter);
router.use("/games", gameRouter);

/* ************************************************************************* */

module.exports = router;
