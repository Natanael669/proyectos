const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()

// middleware
app.use(express.json())

// ruta raiz
app.get('/', (req, res) => {
  res.send('bienvenido')
})

// rutas obtenidas
const routes = require('./routes/userRoutes.js')
app.use('/api', routes)

// middleware pagina no encontrada 
app.use((req, res, next) => {
  res.status(404).send('PAGINA NO ENCONTRADA')
});

// mongodb conexion
mongoose.connect(process.env.MONGODB_URI)
  .then(() => { console.log('Conectado a MongoDB Atlas') })
  .catch((error) => console.log(error))



// puerto
const PUERTO = process.env.PORT || 3000

app.listen(PUERTO, () => {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}...`)
})
