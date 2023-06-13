import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const EditarUsuarios = () => {
  // accedemos al id enviado por la ruta con el hook "useParams"
  const { id } = useParams()
  // hook para navegar al inicio luego de editado el usuario
  const navigate = useNavigate()

  // hooks para editar
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [usuariosExistentes, setUsuariosExistentes] = useState([])

  useEffect(() => {
    // Verificamos si existen los usuarios en el backend
    axios
      .get('http://localhost:3001/api/usuario/obtenerUsuarios')
      .then((res) => {
        setUsuariosExistentes(res.data)
      })
      .catch((err) => console.error(err))
  }, [])

  // peticion para obtener el usuario
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/usuario/obtenerUsuario/${id}`)
      .then((res) => {
        console.log(res.data)
        const datosUsuario = res.data
        setNombre(datosUsuario.nombre)
        setEmail(datosUsuario.email)
        setTelefono(datosUsuario.telefono)
      })
      .catch((err) => console.log(err))
  }, [id])

  // funcion que actualizará
  const updateUser = () => {
    // Verificar si los campos tienen datos
    if (nombre.trim() === '' || email.trim() === '' || telefono.trim() === '') {
      Swal.fire('¡Error!', 'Por favor, complete todos los campos', 'error')
      return
    }

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.match(emailRegex)) {
      Swal.fire(
        '¡Error!',
        'Por favor, ingrese un correo electrónico válido',
        'error'
      )
      return
    }

    // Validar que el teléfono solo contenga números
    const telefonoRegex = /^\+?\d+$/
    if (!telefono.match(telefonoRegex)) {
      Swal.fire(
        '¡Error!',
        'Por favor, ingrese un número de teléfono válido.',
        'error'
      )
      return
    }

    // si existe algun campo del usuario ingresado, desplegamos un error
    const usuarioExistente = usuariosExistentes.find(
      (usuario) =>
        usuario.nombre.toLowerCase() === nombre.toLowerCase() ||
        usuario.email.toLowerCase() === email.toLowerCase() ||
        usuario.telefono === telefono
    )

    if (usuarioExistente) {
      Swal.fire(
        '¡Error!',
        'El nombre, email o teléfono ingresado ya existe. Por favor, ingrese información única.',
        'error'
      )
      return
    }

    // si no hay error se prosigue y se agrega
    let usuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idUsuario: id,
    }

    axios
      .put(`http://localhost:3001/api/usuario/actualizarUsuario/${id}`, usuario)
      .then((res) => {
        console.log(res.data)
        Swal.fire('¡Agregado!', 'Usuario editado exitosamente', 'success')
        navigate('/')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className='container'>
      <div className='row'>
        <h2 className='mt-4'>Editar Usuario</h2>
      </div>
      <div className='row'>
        <div className='col-sm-6 offset-3'>
          <div className='mb-3'>
            <label htmlFor='nombre' className='form-label'>
              Nombre
            </label>
            <input
              type='text'
              className='form-control'
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value)
              }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='telefono' className='form-label'>
              Telefono
            </label>
            <input
              type='text'
              className='form-control'
              value={telefono}
              onChange={(e) => {
                setTelefono(e.target.value)
              }}
            />
          </div>
          <button className='btn btn-success' onClick={updateUser}>
            Guardar Usuario
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditarUsuarios
