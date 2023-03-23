import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//componentes 
import Perfil from './componentes/Perfil';
import ListaUsuarios from './componentes/ListaUsuarios';

// context
import UserState from './context/usuario/UserState';

function App() {
  return (
    <UserState>
      <div className='container p-4'>
        <div className='row'>
          <div className="col-md-7">
            <ListaUsuarios />
          </div>
          <div className="col-md-5">
            <Perfil />
          </div>
        </div>
      </div>
    </UserState>
  );
}

export default App;
