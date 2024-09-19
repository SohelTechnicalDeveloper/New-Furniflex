const adminController = require("../models/adminModel")
const bcrypt = require('bcrypt')

const addAdmin = async (req,res)=>{

    const {adminName,adminPassword} = req.body

    try {

    const hashedPassword = await bcrypt.hash(adminPassword,10)
        const result = await adminController.create({
            adminName:adminName,
            adminPassword:hashedPassword
        })
      res.status(201).send({msg:"Success",data:result})
        
    } 
    catch (error) 
    {
        res.status(400).send(error)
        
    }
}

const loginAdmin = async (req,res)=>{

    const {adminName,adminPassword} = req.body
    try {
    
    const result = await adminController.find({
        adminName:adminName,
    })
    if(result)
    {
        
        const check = await adminController.comparePassword(adminPassword,result[0].adminPassword)
        if(check)
        {

            console.log(check+"check");
            
            res.status(200).send({msg:" Login Success",data:result})
        }

    }
    else{
        res.status(400).send({msg:"login failed wrong password"})
    }
    } catch (error) {

        res.status(400).send(error)
        
        
    }

}

module.exports = {addAdmin,loginAdmin}