const userController = require("../models/userModel")
const bcrypt = require('bcrypt');
const {ObjectId} = require('mongodb')
const jwt = require('jsonwebtoken')
const secret_key = 'code'

const { Success, failure } = require("../utils/responseWrapper");

const addUser = async (req,res)=>{
    
    const {name,email,mobileNo,address,password} = req.body;
    console.log(req.body);
    try {
    
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await userController.create({
            name:name,
            email:email,
            mobileNo:mobileNo,
            address:address,
            password:hashedPassword,
        })
        res.status(201).send({msg:"Success",data:result})
        
    } 
    catch (error) 
    {
        res.status(400).send(error)
        
    }
}


const loginUser = async (req,res)=>{

    const{email,password} = req.body
    
    try {  
        const result = await userController.find({
            email:email,         
        })       
        if(result[0].Status==="Active")
        {
           if(result)
            {

             
            const check = await userController.comparePassword(password,result[0].password)
            if(check)
                {

             const token = jwt.sign({result},secret_key,{expiresIn:"1h"})                 
                res.status(200).send({msg:"Login Success",data:result,token:token})
            }
           }
        else
        {
            res.status(400).send({msg:"login failed wrong password"})
        }
    }
     else{

          res.status(400).send({msg:"Admin is Blocked You"})
     }
       } 
    catch (error) {

      console.log(error);
      
        res.send(error)
        
    }
}


const updateUser = async (req,res)=>{

      try {
        const condition =  new ObjectId(req.params.id)
        const  { Status } = req.body
        
        const result = await userController.updateOne({_id:condition},{$set:{Status:Status}})
        
        res.send(Success(200,result))

      } catch (error) {
        
          console.log(error);
          res.send(failure(400,error))
          
      }
}

const getUser = async (req,res)=>{
    try
    {
        const result = await userController.find({})
        
        res.send(Success(200,result))
    }
    catch(error)
    {
        res.status(failure(400,error))
    }
}

const deleteUser = async (req,res)=>{

    try
    {
          const result = await userController.deleteMany({})
          res.status(200).send({msg:"Success",data:result})
    }
    catch(error)
    {

        res.status(400).send(error)

    }
}

module.exports = {addUser,deleteUser,getUser,loginUser,updateUser}