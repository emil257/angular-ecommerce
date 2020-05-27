const mongodb = require('mongoose')
const Product = require('../../schemas/productSchema')

exports.addProduct = (req, res) => {

  const product = new Product({
    _id: new mongodb.Types.ObjectId,
    name: req.body.name,
    short: req.body.short,
    desc: req.body.desc,
    price: req.body.price,
    image: req.body.image
  })

  product.save()
    .then(() => {
      res.status(201).json({
        statusCode: 201,
        status: true,
        message: "Product was created successfully"
      })
    })
    .catch(err => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: "Product was not created, please contact admin"
      })
    })
}

exports.getProducts = (req, res) => {
  Product.find().then(products => {
    if (products.length <= 0) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: "Could not find any products"
      })
    }
    return res.status(200).json(products)
  })
}

exports.getProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then(product => {
      return res.status(200).json(product)
    }).catch(err => res.status(500).json({
      statusCode: 500,
      status: false,
      message: "Could not get product with id: " + req.params.id
    }))
}
