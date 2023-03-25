const express = require('express');
const { join } = require('path');
const router = require('./routes/rutas');
const app = express();

// donde encontrar la carpeta con las vistas
app.set('views', join(__dirname, './views'));

// se utilizará EJS como motor de visualizacion
app.set('view engine', 'ejs');

// rutas obtenidas de ./routes/rutas
app.use(router)

// carpeta con estilos de prueba porque se usara bootstrap
app.use(express.static(join(__dirname, './public')))


// puerto
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});
