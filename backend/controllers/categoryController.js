const { log } = require('console')
const categoryModel = require('../models/categoryModel')
const fs = require('fs')
const {ObjectId} = require('mongodb')
const addCategory = async (req,res)=>{

    const date_time = new Date()
    let current_date = date_time.toLocaleDateString()+", "+date_time.toLocaleTimeString()
    try {
        
        const {Name,productImage} = req.body;
        let category = await categoryModel.create({
            Name:Name,
            productImage:productImage,  
            created:current_date
        })
        console.log("category");
    res.status(201).send({msg:"Success",data:category})
        
    } catch (error) {
          console.log(error);
        res.status(400).send(error)
    }
}
const addImage = async (req,res)=>{
    
      try {

        let result = req.file
        res.status(201).send({msg:"Success",data:result})
        // console.log(result);
        
      } catch (error)
       {
        res.status(400).send(error)
        
      }
}

const deleteCategory = async (req,res)=>{

    try {
        const id = req.params.id
        
        let result = await categoryModel.findOneAndDelete({_id:id})
       const path=result.productImage;
       console.log(path);
       fs.unlink(path,()=>{

       })
        res.status(200).send({msg:"Success",data:result})
    } 
    catch (error) {
        res.status(400).send(error)
        
    }

}
const getCategory = async (req,res)=>{
    try {

        let result = await categoryModel.find({})
        res.status(200).send({msg:"Success",data:result})
        
    } catch (error) 
    {
        res.status(400).send(error)
        
    }
}


module.exports = {
    addCategory,
    deleteCategory,
    getCategory,
    addImage
}