import './App.css';

import ListaDeTareas from './componentes/ListaDeTareas.js';


function App() {
  return (
    <div className='aplicacion-tareas'>
      
      <div className='tareas-lista-principal'>
        <h1>To Do List</h1>
        <ListaDeTareas/>
      </div>
      
    </div>
  );
}

export default App;








/*
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
<div className='freecodecamp-logo-contenedor'>
<img
src={freeCodeCampLogo}
className='freecodecamp-logo'
/>
</div>*/
