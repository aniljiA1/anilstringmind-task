const express = require("express");
const { getDeals, getDealById } = require("../controllers/deal.controller");

const router = express.Router();

router.get("/", getDeals);
router.get("/:id", getDealById);

module.exports = router;
