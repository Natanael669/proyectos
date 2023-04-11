const express = require('express')
const userSchema = require('../models/userModels')
const routes = express.Router()

// crear usuario
routes.post('/users', (req, res) => {
  const user = userSchema(req.body)
  user.save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ mensaje: err }))
})

// obtener usuario
routes.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ mensaje: err }))
})

// obtener UN SOLO usuario
routes.get('/users/:id', (req, res) => {
  const id = req.params.id
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({ mensaje: err }))
})

// actualizar un usuario
routes.put('/users/:id', (req, res) => {
  const id = req.params.id
  const { nombre, edad, email } = req.body

  userSchema
    .updateOne({ _id: id }, { $set: { nombre, edad, email } })
    .then((data) => res.json(data))
    .catch((err) => res.json({ mensaje: err }))
})

// eliminar un usuario
routes.delete('/users/:id', (req, res) => {
  const id = req.params.id
  userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({ mensaje: err }))
})

module.exports = routes

