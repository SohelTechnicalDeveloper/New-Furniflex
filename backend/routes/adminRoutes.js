const express = require('express')
const router = express.Router()
const {addAdmin,loginAdmin} = require('../controllers/adminController')

router.route("/")
   .post(addAdmin)

router.route('/login')
   .post(loginAdmin)


module.exports = router
