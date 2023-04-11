import Acerca from './Pages/Acerca';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import NavLink from './componentes/NavLink';
import ExampleLink from './Pages/ExampleLink';
import Usuario from './Pages/Usuario';
import Panel from './Pages/Panel';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <NavLink />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Acerca' element={<Acerca />} />
        <Route path='/ExampleLink' element={<ExampleLink />} />

        {/* uso de parametros en las rutas */}
        <Route path='/Usuario/:userId' element={<Usuario />} />

        {/* uso de Navigate */}
        <Route path='/navegar' element={<Navigate replace to='/Acerca' />} />

        {/* uso de rutas anidadas */}
        <Route path='/Panel/*' element={<Panel />}>
          {/* uso de sub-ruta */}
          <Route path='bienvenida' element={<p> bienvenida v2</p>} />
          <Route path='adios' element={<p> adios v2</p>} />
        </Route>
        {/* al no encontrarse la ruta */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
