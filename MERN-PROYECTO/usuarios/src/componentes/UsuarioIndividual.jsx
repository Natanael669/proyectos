import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'

const UsuarioIndividual = ({ user }) => {
  // animacion al bajar en la lista de usuarios
  useEffect(() => {
    AOS.init()
  }, [])

  // recargar la pagina luego de eliminar
  const navigate = useNavigate()

  // eliminar el usuario
  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:3001/api/usuario/borrarUsuario/${id}`)
      .then((res) => {
        console.log(res.data)
        // animacion de eliminar
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success mx-2',
            cancelButton: 'btn btn-danger',
          },
          buttonsStyling: false,
        })

        swalWithBootstrapButtons
          .fire({
            title: '¿Estas seguro?',
            text: '¡No podras revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SIII!',
            cancelButtonText: 'NOOO!',
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons
                .fire('¡Eliminado!', 'Tu documento fue eliminado.', 'success')
                .then(() => {
                  // Después de que se muestra la animación de eliminación
                  navigate(0) // Navegar a la página 0 o realizar otras acciones
                })
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'Tu documento esta seguro :)',
                'error'
              )
            }
          })
      })
      // fin animacion de eliminar
      .catch((err) => console.error(err))
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 offset-3' data-aos='flip-right'>
          <ul className='list-group'>
            <li className='list-group-item'>{user.idUsuario}</li>
            <li className='list-group-item'>{user.nombre}</li>
            <li className='list-group-item'>{user.email}</li>
            <li className='list-group-item'>{user.telefono}</li>
          </ul>
          <Link to={`/editarUsuario/${user.idUsuario}`}>
            <li className='btn btn-success'>Editar</li>
          </Link>
          &nbsp;
          <button
            className='btn btn-danger'
            onClick={() => deleteUser(user.idUsuario)}
          >
            Borrar
          </button>
          <hr className='mt-4' />
        </div>
      </div>
    </div>
  )
}

export default UsuarioIndividual
