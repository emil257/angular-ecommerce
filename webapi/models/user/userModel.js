const mongodb = require('mongoose')
const User = require('../../schemas/userSchema')
const encrypt = require('bcrypt')
const auth = require('../../guards/authorize')

exports.createUser = (req, res) => {
  User.findOne({ email: req.body.email })
    .then(exists => {
      if (exists !== null) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: "User with that email already exists"
        })
      }

      encrypt.hash(req.body.password, encrypt.genSaltSync(9), (err, hash) => {
        if (err) {
          return res.status(500).json({
            statusCode: 500,
            status: false,
            message: "Failed when creating user password"
          })
        }
        const user = new User(
          {
            _id: new mongodb.Types.ObjectId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            passwordHash: hash
          }
        )
        user.save()
          .then(() => {
            res.status(201).json({
              statusCode: 201,
              status: true,
              message: "User was created successfully"
            })
          })
          .catch(err => {
            res.status(500).json({
              statusCode: 500,
              status: false,
              message: "User was not created, please contact admin"
            })
          })
      })
    })
}

exports.loginUser = (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user === null) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: "Incorrect email adress or password"
        })
      }
      encrypt.compare(req.body.password, user.passwordHash, (err, result) => {
        if (result) {

          return res.status(200).json({
            statusCode: 200,
            status: true,
            message: "Auth was successful",
            token: auth.generateToken(user._id),
            user: user
          })
        }
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: "Incorrect email adress or password"
        })
      })
    })
}

exports.getUser = (req, res) => {
  let id = auth.decodeToken(req.headers.authorization.split(" ")[1]).id

  if (id !== null) {
    User.findOne({ _id: id })
      .then(user => {
        return res.status(200).json(user)
      })
      .catch(err => res.status(500).json({
        statusCode: 500,
        status: false,
        message: "Could not get user with id: " + id
      }))
  }
}

exports.getUsers = (req, res) => {
  User.find()
    .then(users => {
      if (users.length <= 0) {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: "Could not find any users"
        })
      }
      return res.status(200).json(users)
    })
    .catch(err => res.status(500).json({
      statusCode: 500,
      status: false,
      message: "Could not find any users, please contact admin"
    }))
}

exports.deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(user => {
      if (user.deletedCount === 0) {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: "Could not find user with id: " + req.params.id
        })
      }
      return res.status(200).json({
        statusCode: 200,
        status: true,
        message: "Successfully deleted user with id " + req.params.id
      })
    })
    .catch(err => res.status(500).json({
      statusCode: 500,
      status: false,
      message: "User was not deleted, please contact admin"
    }))
}

exports.updateShipping = (req, res) => {
  let id = auth.decodeToken(req.headers.authorization.split(" ")[1]).id

  if (id !== null) {
    User.findOne({ _id: id })
      .then(user => {
        if (user === null) {
          return res.status(404).json({
            statusCode: 404,
            status: false,
            message: "Could not find user with id " + id
          })
        }
        user.updateOne({ shipping: req.body.shipping, modified: Date.now() })
          .then(() => {
            res.status(200).json({
              statusCode: 200,
              status: true,
              message: "Shipping was updated successfully"
            })
          })
          .catch(err => {
            res.status(500).json({
              statusCode: 500,
              status: false,
              message: "Shipping was not updated, please contact admin"
            })
          })
      })
      .catch(err => res.status(500).json({
        statusCode: 500,
        status: false,
        message: "Shipping was not updated, please contact admin"
      }))
  }
}