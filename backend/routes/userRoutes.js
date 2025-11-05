const express = require("express");
const router = express.Router();
const {getUser, getFunds, newOrder,getAllOrders, getSummary} = require("../controllers/userControllers");
router.get("/:id",getUser);
router.post("/:id/funds",getFunds);
router.post("/:id/newOrder",newOrder);
router.get("/:id/allOrders",getAllOrders);
router.get("/:id/summary",getSummary);

module.exports = router;