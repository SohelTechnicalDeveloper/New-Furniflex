const mongoose = require('mongoose');

const productCategory = new mongoose.Schema({

    Name:{
        type:String,
        required:true
    },
    created:{
        type:String,
    },
    productImage:{
        type:String,
        required:true
    }
})

const categoryModel = new mongoose.model('category',productCategory)

module.exports = categoryModel