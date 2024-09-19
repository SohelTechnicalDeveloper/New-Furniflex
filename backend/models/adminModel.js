const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const adminSchema = new mongoose.Schema({
    adminName:{
        type:String,
        required:true
    },

    adminPassword:{

        type:String,
        required:true
    }
})

adminSchema.static("comparePassword",async function(adminPassword,hashedPassword){
    const match = await bcrypt.compare(adminPassword,hashedPassword)    
    return match;
})

const adminModel = new mongoose.model('admin',adminSchema)
module.exports = adminModel

