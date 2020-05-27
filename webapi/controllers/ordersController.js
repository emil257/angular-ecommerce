const route = require('express').Router()
const orderModel = require('../models/order/orderModel')

//guard
const auth = require('../guards/authorize')

route.get('/:userId', auth.verifyToken, orderModel.getOrders)
route.get('/', auth.verifyToken, orderModel.getAllOrders)

route.post('/add', auth.verifyToken, orderModel.placeOrder)
route.put('/:orderId', auth.verifyToken, orderModel.updateOrder)

module.exports = route