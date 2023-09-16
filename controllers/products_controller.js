const Product = require('../models/product');

// Function to show all the products
exports.products = async function(req, res) {
    try {
        const foundProducts = await Product.find({});
        res.send(foundProducts);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Function to create a new product
exports.create = async (req, res) => {
    try {
        const { name, quantity } = req.body;
        const newProduct = new Product({ name, quantity });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Function to delete a product using its ID
exports.delete = async function(req, res) {
    try {
        await Product.deleteOne({ _id: req.params.productID }).exec();
        res.send({ message: "Product deleted" });
    } catch (err) {
        res.status(500).send(err);
    }
};

// Function to update a product's quantity
exports.updateQuantity = function(req, res) {
    const ID = req.params.productID;
    // Find the product using ID
    Product.findById(ID, function(err, found) {
        if (err) {
            res.send(err);
        } else {
            // Note - To increment the quantity of the product, put a positive number in the query,
            //        and to decrement the quantity, put a negative number in the query.
            const newQty = parseInt(found.quantity) + parseInt(req.query.number);
            // Update the product's quantity
            Product.findByIdAndUpdate(ID, { quantity: newQty }, function(err, updatedProduct) {
                if (err) {
                    res.send(err);
                } else {
                    updatedProduct.quantity = newQty;
                    res.send({
                        product: updatedProduct,
                        message: 'Updated successfully'
                    });
                }
            });
        }
    });
};

