var express = require('express');
const {  createproduct, getproduct, deleteproduct, updateproduct } = require('../controllers/product_controllers');
var router = express.Router();


// create a product
router.post("/", createproduct);


// delete a product
router.delete("/:id", deleteproduct);

// all product
router.get("/", getproduct);


// update product
router.get("/:id/quantity/:quantity", updateproduct);

module.exports = router;