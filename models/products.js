const mongoose = require('mongoose');

var reviews = mongoose.Schema({
    rating: {
        type: Number
    },
    content: {
        type: String
    }
});
var productSchema = mongoose.Schema({
    color: {
        type: String
    },
    category: {
        type: String
    },
    productName: {
        type: String
    },
    price: {
        type: String
    },
    description: {
        type: String
    },
    tag: {
        type: String
    },
    productMaterial: {
        type: String
    },
    imageUrl: {
        type: String
    },
    createdAt: {
        type: String
    },
    reviews: [reviews]
});

 module.exports = mongoose.model('Product',productSchema);
