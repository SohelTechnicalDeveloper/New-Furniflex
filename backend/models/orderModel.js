const mongoose = require('mongoose')
const {ObjectId} = require('mongodb')
const productOrder = new mongoose.Schema({
    productId:{
        type:ObjectId,
        required:true
    },
    userId:{
        type:ObjectId,
        default:""
    },
    quantity:{
        type:Number,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    orderStatus:{
        type:String,
        required:true,
        default:"pending"
    },
    totalPrice:{
        type:Number,
        required:true
    },
    orderDate:{
        type:String,
        required:true
    },

})

const Orders = new mongoose.model('ProductOrder',productOrder)
module.exports = Orders