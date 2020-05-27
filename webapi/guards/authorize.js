const jwt = require('jsonwebtoken')
const secretKey = "a7f1e9ba-4a74-4b3f-b431-0639163fb4ee"


exports.generateToken = (id) => {
  return jwt.sign({ id: id }, secretKey, { expiresIn: "1h" })
}

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    req.userData = jwt.verify(token, secretKey)
    next()
  }
  catch {
    return res.status(401).json({
      statusCode: 401,
      status: false,
      message: "Access restricted! Auth failed. Please Login"
    })
  }
}

exports.decodeToken = (token) => {
  return jwt.decode(token, secretKey)
}
