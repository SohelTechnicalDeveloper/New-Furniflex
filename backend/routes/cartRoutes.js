const {
  addCart,
  deleteCart,
  getCart,
  getCartByUserID,
  updateCart,
  getAllCart
} = require("../controllers/cartController");

const express = require("express");
const router = express.Router();

router.route("/")
          .post(addCart)
          .get(getAllCart)

 router.route("/:id")
          .delete(deleteCart)
          .get(getCartByUserID)
          .patch(updateCart)
          
    router.route("/getCart/:id")
          .get(getCart);
          
module.exports = router;
