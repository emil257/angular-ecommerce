const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization, Origin, X-Requested-Width")

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE")
  }

  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/users', require('./controllers/usersController'))
app.use('/api/products', require('./controllers/productsController'))
app.use('/api/orders', require('./controllers/ordersController'))
// app.use('/api/customers', require('./controllers/customersController'))

module.exports = app