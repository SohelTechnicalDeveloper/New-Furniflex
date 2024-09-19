const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
 
     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true
     },
     mobileNo:{
        type:Number,
        required:true
     },
     address:{
        type:String,
        required:true
     },
     password:{
        type:String,
        required:true
     },
     Status:{
      type:String,
      default:"Active"
     }
    
})

userSchema.static("comparePassword",async function(password,hashedPassword)
{
   const match = await bcrypt.compare(password,hashedPassword)   
   return match;
})


const userModel = new mongoose.model("user",userSchema)
module.exports = userModel;
