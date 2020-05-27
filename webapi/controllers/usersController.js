const route = require('express').Router()
const userModel = require('../models/user/userModel')

//guard
const auth = require('../guards/authorize')

route.post('/register', userModel.createUser)
route.post('/login', userModel.loginUser)

route.get('/user', auth.verifyToken, userModel.getUser)
route.get('/', auth.verifyToken, userModel.getUsers)
route.put('/shipping', auth.verifyToken, userModel.updateShipping)

route.delete('/:id', auth.verifyToken, userModel.deleteUser)


module.exports = route