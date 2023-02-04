import React,{useState} from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hoja-de-estilos/ListaDeTareas.css';


function ListaDeTareas(){

  const [tareas, SetTareas] = useState([]);


  const agregarTarea = tarea => {
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim()
      const tareasActualizadas = [tarea, ...tareas];
      SetTareas(tareasActualizadas);
      
    }
  }

  const eliminarTarea= id => {
    const tareasActualizadas = tareas.filter (tarea => tarea.id !== id);
    SetTareas (tareasActualizadas);
  }

  const completarTarea= id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    SetTareas(tareasActualizadas)
  }
  return(
    <>
    <TareaFormulario onSubmite={agregarTarea}/>
    <div className='tarea-lista-contenedor'>
      {
        tareas.map((tarea)=>
          <Tarea
            key = {tarea.id}
            id = {tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea ={eliminarTarea}
            completarTarea= {completarTarea} 
          />
        )
      }
    </div>
    </>

  );
}
export default ListaDeTareas;