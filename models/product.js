const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        
    },
    quantity:{
        type: Number,
        required: true,
        defalut: 0
    },

}, {
    timestamps: true
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;