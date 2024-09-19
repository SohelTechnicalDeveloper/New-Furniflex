const orderController = require('../models/orderModel');
const productModel = require('../models/productModel');
const { Success, failure } = require('../utils/responseWrapper');

const addOrder = async (req,res)=>{

    const {productId,userId,quantity,orderStatus,totalPrice} = req.body
    const date_time = new Date()
    const order_time = date_time.toLocaleDateString()+" "+date_time.toLocaleTimeString();
    const productDetails = await productModel.findOne({_id:productId})
    console.log(productDetails);
    
    const productPrice = productDetails.productPrice
    
    try {   

    const Orders = await orderController.create({
        
        productId : productId,
        userId : userId,
        quantity:quantity,
        productPrice:productPrice,
        orderStatus:orderStatus,
        totalPrice:totalPrice,
        orderDate:order_time
    })
    console.log(Orders);
    
    res.status(201).send({msg:"Success",data:Orders})
} 
catch (error) 
{
  res.status(400).send(error)       
}

}

 const getOrder = async (req,res)=>{

         try {

          const result = await orderController.aggregate([

               {
                $lookup:{
                  from:"products",
                  localField:"productId",
                  foreignField:"_id",
                  as:'products'

               },
              },
              {
               $lookup:{
                from:"users",
                localField:"userId",
                foreignField:"_id",
                as:'users'

             }
               }
          ])
          res.send(Success(200,result))
          
         } catch (error) {
          
          res.send(failure(404,error))
         }
 }

 const updateOrderStatus = async (req,res)=>{

      try {
        
         const result = await orderController.updateOne({_id:req.params.id},{$set:req.body})
         res.send(Success(200,result))
      } catch (error) {
        
          res.send(failure(400,error))
      }
 }

module.exports = {addOrder,getOrder,updateOrderStatus}