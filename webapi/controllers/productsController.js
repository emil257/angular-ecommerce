const route = require('express').Router()
const productModel = require('../models/product/productModel')

//guard
// const auth = require('../guards/authorize')

route.get('/', productModel.getProducts)
route.get('/:id', productModel.getProduct)

route.post('/add', productModel.addProduct)

module.exports = route