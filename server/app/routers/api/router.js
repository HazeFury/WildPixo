const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const gameRouter = require("./games/router");
const newsRouter = require("./news/news");

router.use("/items", itemsRouter);
router.use("/games", gameRouter);
router.use("/news", newsRouter);

/* ************************************************************************* */

module.exports = router;
