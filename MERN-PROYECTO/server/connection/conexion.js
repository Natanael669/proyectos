const mongoose = require('mongoose')
require('dotenv').config()

// mongodb conexion
mongoose.connect(process.env.MONGODB_URI)
  .then(() => { console.log('Conectado a MongoDB') })
  .catch((error) => console.log(error))

module.exports = mongoose

