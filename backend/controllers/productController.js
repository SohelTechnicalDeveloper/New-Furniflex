const productModel = require("../models/productModel.js")
const {ObjectId} = require('mongodb');
const {Success,failure }= require("../utils/responseWrapper.js");


const addProduct = async (req,res)=>{

    const {productName,productPrice,productOffers,productColor,categoryId,description,capacity,productImage} = req.body;

    try 
    {
        let productDetails  = await productModel.create({
            categoryId:categoryId,
            productName:productName,
            productPrice:productPrice,
            productRating:Math.floor(Math.random()*100000),
            productReviews:Math.floor(Math.random()*100000),
            productOffers:productOffers,
            productColor:productColor,
            productImage:productImage,
            description:description,
            capacity:capacity
        })
        // console.log(data);
        res.status(201).json({msg:"Success",data:productDetails}) 
    }
     catch (error) 
     {
        console.log(error);
        res.status(400).send(error)
        
     }
   
}

const getProductAllData = async (req,res)=>{
    try{

        const response = await productModel.aggregate([
            {
                $lookup:{
                   from:"categories",
                   localField:"categoryId",
                   foreignField:"_id",
                   as:'products'

                }
          },            
        ])
        res.send(Success(200,response))

    }
    catch(error)
    {
        res.status(400).send(error)
    }
}


const getProductById = async (req,res)=>{
    try {

        const id = new ObjectId(req.params.id)
        const result = await productModel.findOne({_id:id})
        
        const categoryData = await productModel.aggregate([
            {
              $match:{categoryId : result.categoryId}
            },
             {
                $lookup:{
                   from:"categories",
                   localField:"categoryId",
                   foreignField:"_id",
                   as:'products'

                }
            },   
        ])
        res.send(Success(200,{result,categoryData}))
        
    } catch (error) {
        res.send(failure(400,error))
        
    }
}
const deleteProduct = async (req,res)=>{

    try {
        
         const result = await productModel.deleteMany({})
         res.status(200).send({msg:"Success",data:result})
    } 
    catch (error) {
        res.status(400).send(error)
        
    }
}

const addImage = async (req,res)=>{
    try {
        let result = req.file
        console.log(result);
        res.status(201).send({data:"Success",data:result})
        
    } catch (error) 
    {
        res.status(400).send(error)
        
    }
}

const deleteProductById = async (req,res)=>{
    try {

        const result = await productModel.deleteMany({_id:req.params.id})
        res.status(200).send({msg:"Success",data:result})
        
    } 
    catch (error) {
        res.status(400).send(error)
        
    }
}

const updateProductById = async (req,res)=>{
    
     try {

        //   const{categoryId,productPrice,productColor,productImage,productName,productOffers,description,capacity} = req.body
        const result = await productModel.updateOne({_id:req.params.id},{$set:req.body})
        // console.log(result);
        res.status(200).send({msg:"Success Update",data:result})
        
     } catch (error) {
        res.status(400).send(error)
     }
}

const updateFiledById =  async (req,res)=>{

    try {
         
        const result = await productModel.update( {_id:req.params.id},{$unset:{Highlight:1}})
        console.log(result);
        res.status(200).send({msg:"Success",data:result})
        
    } catch (error) {   
        res.status(400).send(error)
        
    }
}

const getDataByMatchCategory = async (req,res)=>{
    try {
        const categoryId= new ObjectId(req.params.id);
        console.log(categoryId+"cate");
        
        const result = await productModel.aggregate([
            {
              $match:{categoryId}
            },
             {
                $lookup:{
                   from:"categories",
                   localField:"categoryId",
                   foreignField:"_id",
                   as:'products'

                }
            },   
        ])
        
        res.send(Success(200,result))
    } catch (error) {
        res.send(failure(400,error))
    }
}

module.exports = {getProductById,addProduct,deleteProduct,deleteProductById,updateProductById,updateFiledById,addImage,getProductAllData,getDataByMatchCategory}