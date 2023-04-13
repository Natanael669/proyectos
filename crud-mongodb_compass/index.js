const mongoose = require('mongoose')
require('dotenv').config()

// mongodb conexion
mongoose.connect(process.env.MONGODB_URL)
  .then(() => { console.log('Conectado a MongoDB compass') })
  .catch((error) => console.log(error))