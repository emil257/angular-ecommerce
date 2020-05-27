const http = require('http')
const port = process.env.oirt || 80
const app = require('./app')
const mongodb = require('mongoose')

const serverUri = 'http://localhost:' + port

const mongoUri = 'mongodb+srv://emil:bytmig123@cluster0-ak8ja.mongodb.net/webapidb?retryWrites=true&w=majority'

//starting server
http.createServer(app).listen(port, () => console.log('WEBSERVER: ' + serverUri))

mongodb
  .set('useCreateIndex', true)
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
  })
  .then(() => console.log('MONGODB: Running'))
  .catch(error => console.log(error))
