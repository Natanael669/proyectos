const express = require('express')
const app = express()
const dbMongoose = require('./connection/conexion')
const cors = require('cors');

// middleware
app.use(express.json())

// Habilitar CORS para todas las rutas
app.use(cors());

// rutas obtenidas
const rutas = require('./routes/rutas')
app.use('/api/usuario', rutas)

//ruta raiz
app.get('/', (req, res) => {
  res.send("bienvenido")
})

// middleware pagina no encontrada 
app.use((req, res, next) => {
  res.status(404).send('PAGINA NO ENCONTRADA')
});

//server
const PUERTO = process.env.PORT || 3001

app.listen(PUERTO, (err) => {
  if (err) {
    console.error(`Error al iniciar el servidor: ${err}`);
    return;
  }
  console.log(`el servidor esta escuchando en el puerto ${PUERTO}...`)
});