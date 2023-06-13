import './App.css'
import AgregarUsuarios from './componentes/AgregarUsuarios'
import EditarUsuarios from './componentes/EditarUsuarios'
import ListarUsuarios from './componentes/ListarUsuarios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand" href="/">CRUD MERN-STACK</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="agregarUsuario">Agregar Usuario</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
        <Routes>
          <Route path='/' element={<ListarUsuarios />}></Route>
          <Route path='/agregarUsuario' element={<AgregarUsuarios />}></Route>
          <Route path='/editarUsuario/:id' element={<EditarUsuarios />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
