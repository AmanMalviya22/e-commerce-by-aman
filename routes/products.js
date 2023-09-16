const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Function to show all the products
router.get('/', async function(req, res) {
    try {
        const foundProducts = await Product.find({});
        res.send(foundProducts);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Function to create a new product
router.post('/create', async function(req, res) {
    try {
        const { name, quantity } = req.body;
        console.log(req.body);
        const newProduct = new Product({ name, quantity });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Function to delete a product using its ID
router.delete('/:productID/delete', async function(req, res) {
    try {
        await Product.deleteOne({ _id: req.params.productID });
        res.send({ message: "Product deleted" });
    } catch (err) {
        res.status(500).send(err);
    }
});

// Function to update a product's quantity
router.post('/:productID/update-quantity', async function(req, res) {
    try {
        const ID = req.params.productID;
        const foundProduct = await Product.findById(ID);
        if (!foundProduct) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }

        const newQty = parseInt(foundProduct.quantity) + parseInt(req.query.number);
        foundProduct.quantity = newQty;
        await foundProduct.save();

        res.send({
            product: foundProduct,
            message: 'Updated successfully'
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
