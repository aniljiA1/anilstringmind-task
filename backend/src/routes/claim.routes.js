const express = require("express");
const auth = require("../middleware/auth.middleware");
const { claimDeal, getUserClaims } = require("../controllers/claim.controller");

const router = express.Router();

router.post("/:dealId", auth, claimDeal);
router.get("/", auth, getUserClaims);

module.exports = router;
