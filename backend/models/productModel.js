const mongoose = require('mongoose');
const {ObjectId} = require('mongodb')

const productSchema = new mongoose.Schema({

    categoryId:{
        type:ObjectId,
        required:true
    },
    productName:{
            type:String,
            required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productRating:{
        type:Number,
        default:0
    },
    productReviews:{
        type:Number,
        required:true
    },
    productOffers:{
        type:Number,
        required:true   
    },
    productColor:{
        type:Array,
        required:true
    },

     productImage:{
         type:String,
     },
    description:{
        type:String,
        required:true
    },
    capacity:{
        type:Array,
        required:true
    }
    

})

const  productModel = new mongoose.model('product',productSchema)
module.exports = productModel