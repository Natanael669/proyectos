const mongoose = require('mongoose')
require('dotenv').config()

// mongodb conexion
mongoose.connect(process.env.MONGODB_URL)
  .then(() => { console.log('Conectado a MongoDB compass') })
  .catch((error) => console.log(error))


// creacion de esquema y modelo
const datos = mongoose.Schema({
  nombre: {
    type: String
  },
  edad: {
    type: Number
  },
  pais: {
    type: String
  }
}, { versionKey: false })

const datosModelo = mongoose.model('datos1', datos)


/* Mostrar */
const mostrar = async () => {
  const persona = await datosModelo.find()
  console.log(persona)
}
//mostrar()    //<---- funcion que muestra los datos


/* Crear */
const crear = async () => {
  const persona = new datosModelo({
    nombre: 'Juan',
    edad: 24,
    pais: 'Chile'
  })
  const resultado = await persona.save()
  console.log(resultado)
}
//crear()    //<---- funcion que crea datos


/* Actualizar */
const actualizar = async (id) => {
  const persona = await datosModelo.updateOne({ _id: id },
    {
      $set: {
        nombre:'Pedrito modificado',
        pais: 'Chile modificado'
      }
    })
  console.log(persona)
}
//actualizar('')    //<---- funcion que modifica datos


/* Eliminar */
const eliminar = async (id) => {
  const persona = await datosModelo.deleteOne({ _id: id })
  console.log(persona)
}
eliminar('643a1e122d0a236a223d1e64')    //<---- funcion que elimina datos
