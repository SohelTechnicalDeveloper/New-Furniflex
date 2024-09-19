const express = require('express')

const {addOrder, getOrder, updateOrderStatus} = require('../controllers/orderController')
const jwtToken = require('../middleWare/jwtAuthenticate')

const router = express.Router()

router.route('/')
     .post(jwtToken,addOrder)
     .get(getOrder) 

router.route('/:id')
             .patch(updateOrderStatus)   


             
module.exports = router