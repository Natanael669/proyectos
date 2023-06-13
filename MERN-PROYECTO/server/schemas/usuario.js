const mongoose = require('mongoose')
const esquemaUsuario = mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  idUsuario: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('User', esquemaUsuario)