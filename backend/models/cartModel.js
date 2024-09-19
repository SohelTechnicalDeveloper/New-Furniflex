const mongoose = require('mongoose')
const {ObjectId} = require('mongodb')

const cartSchema = new mongoose.Schema({

      userId:{
        type:ObjectId,
        required:true
      },
      productId:{
        type:ObjectId,
        required:true
      },
      quantity:{
        type:Number,
        required:true
      },
      price:{
        type:Number,
    
      },
      totalPrice:{
        type:Number,
      }
})

const cartModel = new mongoose.model("Cart",cartSchema)

module.exports = cartModel