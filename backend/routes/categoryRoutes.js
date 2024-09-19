const express = require('express')

const {addCategory,deleteCategory,getCategory,addImage} = require("../controllers/categoryController")

const router = express.Router()

const multer = require('multer')

var uploadImage = multer({storage:multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads')    
        
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+"_"+file.originalname)
    }
})})


router.route("/upload")
.post(uploadImage.single('productImage'),addImage)

router.route("/")
    .post(addCategory)
    .get(getCategory)
    
router.route("/:id")
    .delete(deleteCategory)
         

    

module.exports = router