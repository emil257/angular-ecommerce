const mongodb = require('mongoose')
const Order = require('../../schemas/orderSchema')

exports.placeOrder = (req, res) => {
  const order = new Order({
    _id: new mongodb.Types.ObjectId,
    userId: req.body.userId,
    orderTotal: req.body.orderTotal,
    order: req.body.order
  })
  order.save()
    .then(() => {
      res.status(200).json({
        statusCode: 200,
        status: true,
        message: "Order was placed successfully"
      })
    })
    .catch(err => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: "Order was not created, please contact admin"
      })
    })
}
exports.getOrders = (req, res) => {
  Order.find({ userId: req.params.userId }).then(orders => {
    return res.status(200).json({
      orders
    })
  }).catch(err => {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: "Could not get orders"
    })
  })
}
exports.getAllOrders = (req, res) => {
  Order.find().then(orders => {
    return res.status(200).json({
      orders
    })
  }).catch(err => {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: "Could not get orders"
    })
  })
}
exports.updateOrder = (req, res) => {
  Order.findOne({ _id: req.params.orderId }).then(order => {
    if (order === null) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: "Could not find order with id " + req.params.id
      })
    }
    if (req.body.status !== null) {
      order.updateOne({ status: req.body.status })
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: "Status was updated successfully"
          })
        })
        .catch(err => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: "Status was not updated, please contact admin"
          })
        })
    }
  }).catch(err => res.status(500).json({
    statusCode: 500,
    status: false,
    message: "Status was not updated, please contact admin"
  }))
}