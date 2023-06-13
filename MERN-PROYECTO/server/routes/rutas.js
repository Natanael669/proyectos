const express = require('express')
const router = express.Router()
const esquemaUsuario = require('../schemas/usuario')

// agregar
router.post('/agregarUsuario', (req, res) => {
  const { nombre, email, telefono } = req.body;

  // Verificar si ya existe un usuario con el mismo nombre, email o teléfono
  esquemaUsuario
    .findOne({
      $or: [
        { nombre: nombre },
        { email: email },
        { telefono: telefono }
      ]
    })
    .then((usuarioEncontrado) => {
      if (usuarioEncontrado) {
        return res.json({ mensaje: 'El nombre, email o teléfono ya está registrado' });
      }

      // Si no existe un usuario con la misma información, guardar el nuevo usuario
      const user = esquemaUsuario(req.body);
      user.save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ mensaje: err }));
    })
    .catch((err) => res.json({ mensaje: err }));
});


// obtener todos
router.get('/obtenerUsuarios', (req, res) => {
  esquemaUsuario
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ mensaje: err }))
})

// obtener solo uno
router.get('/obtenerUsuario/:id', (req, res) => {
  const id = req.params.id;
  esquemaUsuario
    .findOne({ idUsuario: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ mensaje: err }))
})

// editar
router.put('/actualizarUsuario/:id', (req, res) => {

  const { nombre, email, telefono } = req.body;

  // Verificar si ya existe un usuario con el mismo nombre, email o teléfono
  esquemaUsuario
    .findOne({
      $or: [
        { nombre: nombre },
        { email: email },
        { telefono: telefono }
      ]
    })
    .then((usuarioEncontrado) => {
      if (usuarioEncontrado) {
        return res.json({ mensaje: 'El nombre, email o teléfono ya está registrado' });
      }

      // Si no existe un usuario con la misma información, editamos el nuevo usuario
      const id = req.params.id
      const { nombre, email, telefono } = req.body

      esquemaUsuario
        .updateOne({ idUsuario: id }, { $set: { nombre, email, telefono } })
        .then((data) => res.json(data))
        .catch((err) => res.json({ mensaje: err }))
    })
    .catch((err) => res.json({ mensaje: err }));
});

// eliminar
router.delete('/borrarUsuario/:id', (req, res) => {
  const id = req.params.id
  esquemaUsuario
    .deleteOne({ idUsuario: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ mensaje: err }))
})



module.exports = router