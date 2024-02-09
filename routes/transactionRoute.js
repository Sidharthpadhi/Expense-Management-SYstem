const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

//router object
const router = express.Router();

//routes
// add transections || POST
router.post("/add-transaction", addTransaction);

// get transection || POST
router.post("/get-transaction", getAllTransaction);

// Edit transections || POST
router.post("/edit-transaction", editTransaction);

// Delete transections || POST
router.post("/delete-transaction", deleteTransaction);

module.exports = router;
