const mongoose = require("mongoose");

const ProductScheme = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    supplier : {
        type : String,
        required : true,
    },
    imgUrl : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    product_location : {
        type : String,
        required : true,
    },
    price : {
        type : String,
        required : true,
    },
}, {timestamps : true});

const Products = mongoose.model("Product", ProductScheme);
module.exports = Products;