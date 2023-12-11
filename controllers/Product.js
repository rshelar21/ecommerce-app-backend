const ProductModel = require("../models/Product");

// used mongodb atlas search

const createProduct = async (req, res) => {
    const newProduct = new ProductModel(req.body);
    try{
        const product = await newProduct.save();
        res.status(200).json("Product created");
    } catch(err){
        res.status(500).json("Error creating product");
    }
};

const getAllProducts = async (req, res) => {
    try{
        const products = await ProductModel.find().sort({createdAt : -1});
        res.status(200).json(products);
    } catch(err){
        res.status(500).json(err);
    }
}

const getSingleProduct = async (req, res) => {
    try{
        const product = await ProductModel.findById(req.params.id);
        res.status(200).json(product);
    } catch(err){
        res.status(500).json(err);
    }

}

const searchProduct = async (req, res) => {
    try{
        const products = await ProductModel.aggregate(
            [
                {
                  $search: {
                    index: "furniture",
                    text: {
                      query: req.params.key,
                      path: {
                        wildcard: "*"
                      }
                    }
                  }
                }
              ]
        )
        res.status(200).json(products);
    } catch(err){
        res.status(500).json(err);
    }
}




module.exports = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    searchProduct
}