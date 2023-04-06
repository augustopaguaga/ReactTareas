import "./App.css";
import logo from "./imagenes/tarea.png";
import ListaDeTareas from "./componentes/listadetareas";

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="free-logo-contenedor">
        <img className="freecodecamp-logo" src={logo} />
      </div>

      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
