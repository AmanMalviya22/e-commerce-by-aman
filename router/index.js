var express = require('express');
var router = express.Router();

var productRouter = require("./product");

router.use('/product',productRouter);

module.exports = router;