const express = require("express");
const {
  createOne,
  updateCheckout,
  getAll,
  getOne,
} = require("../controller/studentController");
const router = express.Router();

router.get("/:date", getAll);
router.get("/:Id",getOne)
router.post("/attendance", createOne);
router.patch("/checkout/:Id", updateCheckout);

module.exports = router;
