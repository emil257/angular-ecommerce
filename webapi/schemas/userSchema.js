const mongodb = require('mongoose')

const userSchema = mongodb.Schema({
  _id: mongodb.Schema.Types.ObjectId,
  role: { type: String, required: false, default: 'customer' },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },

  shipping: {
    type: Object, default: {
      country: "unset",
      city: "unset",
      postal: "unset",
      adressline: "unset"
    }
  },

  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now }
})

module.exports = mongodb.model("User", userSchema)