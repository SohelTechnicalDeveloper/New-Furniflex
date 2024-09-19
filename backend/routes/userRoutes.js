const express = require('express')
const {addUser,deleteUser,getUser,loginUser, updateUser} = require('../controllers/userController')
const router = express.Router()

router.route("/signup")
    .post(addUser)
    
router.route("/")
    .get(getUser)
    .delete(deleteUser)

 router.route("/:id")
             .patch(updateUser)

router.route("/login")
    .post(loginUser)

module.exports = router