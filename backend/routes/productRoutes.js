const express = require("express");
const multer = require("multer");

const {
  addProduct,
  deleteProduct,
  deleteProductById,
  updateProductById,
  updateFiledById,
  addImage,
  getProductById,
  getProductAllData,
  getDataByMatchCategory
} = require("../controllers/productController");

const router = express.Router();
const jwtToken = require('../middleWare/jwtAuthenticate')


var uploadImage = multer({storage:multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'./uploads')
  },
  filename:function(req,file,cb){
    cb(null,Date.now()+"_"+file.originalname)
  } 
})})

router.route('/upload')
  .post(uploadImage.single('productImage'), addImage)
       
router
  .route("/")
  .post(addProduct)
  .delete(deleteProduct)
  .get(getProductAllData)

router.route("/:id")
          .delete(deleteProductById)
          .patch(updateProductById)
          .patch(updateFiledById)
          .get(getProductById)
          
// router.route("/matchCategory/:id")
//           .get(getDataByMatchCategory)



module.exports = router;
