const cartController = require('../models/cartModel')
const productController = require('../models/productModel')
const {ObjectId} = require('mongodb')
const { Success, failure } = require('../utils/responseWrapper')



const addCart = async (req,res)=>{

    
    try {
        const{userId,productId,quantity} = req.body
        const productDetail = await productController.findOne({_id: productId})
        console.log(productDetail);
        let price = productDetail.productPrice
        console.log(price);
        let totalPrice = quantity*price
        console.log(totalPrice);
        
        const result = await cartController.create({
           userId:userId,
           productId:productId,
           quantity:quantity,
           price:price,
           totalPrice:totalPrice

        })
        console.log(result);
        res.status(201).send({msg:"Success",data:result})
        
      } 
    catch (error) 
    {
        res.status(400).send(error)
        
    }
}
const getCart = async (req,res)=>{
    try {
        const cartId = new ObjectId(req.params.id)
        const result = await cartController.findOne({_id:cartId})
        res.send(Success(200,result))
    } catch (error)
     {
        res.send(failure(400,error))

        
    }
}

const getAllCart = async (req,res)=>{
    try {
        
        const result = await cartController.find({})
        res.send(Success(200,result))
    } catch (error) {
        res.send(failure(400,error))
    }
}
const getCartByUserID = async (req,res)=>{
    
        const userId = new ObjectId(req.params.id)
        console.log(req.params.id);
        console.log(userId);
        try{
            const result = await cartController.aggregate(
            [
                {
                     $match:
                     {
                        userId
                     }
                },
                {
                    $lookup:{
                        from:"products",
                        localField:"productId",
                        foreignField:"_id",
                        as:"productsData"

                    }
                    
                }
            ])
            console.log(result);

            res.send(Success(200,result))
        }
        catch(error)
        {
            console.log(error);
            
            res.send(failure(400,error))
        }
}



const deleteCart = async (req,res)=>{
    try {

        const result = await cartController.deleteMany({_id:req.params.id})
        res.status(200).send({msg:"Success",data:result})
        
    } 
    catch(error) 
    {

        res.status(400).send(error)
        
    }
}

const updateCart = async (req,res)=>{
    try {
        const condition = new ObjectId(req.params.id)
        
        const {quantity} = req.body
        const cartData = await cartController.findOne({_id:condition})
        console.log(cartData);

        console.log(cartData.quantity);
        const totalPrice = quantity*cartData.price
        

        console.log(totalPrice);
        
        const result = await cartController.updateOne({_id:condition},{$set:{quantity:quantity,totalPrice:totalPrice}})

        res.send(Success(200,result))
    } 
    catch (error) {

            console.log(error);
        res.send(failure(400,error))

        
    }
}

module.exports = {addCart,deleteCart,getCart,getCartByUserID,updateCart,getAllCart}