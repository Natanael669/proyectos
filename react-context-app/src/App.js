import Lista from "./componentes/Lista";
import NavBar from "./componentes/NavBar";
import UserProvider from "./context/UserProvider";
import PeliculasProvider from "./context/PeliculasProvider";

function App() {
  return (
    <div>
      <UserProvider>
        <PeliculasProvider>
          <NavBar />
          <Lista />
        </PeliculasProvider>
      </UserProvider>
    </div>
  );
}

export default App;
