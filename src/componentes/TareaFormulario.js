import React, { useState } from 'react';
import '../hoja-de-estilos/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';

function TareaFormulario(props) {
  const [input, setInput]= useState('');

  const manejarCambio = ea => {
    setInput(ea.target.value);
  }
  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmite(tareaNueva);
    e.target.reset();
    setInput("");
  }
  return(

    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        onChange = {manejarCambio}
      />
      <button className='tarea-boton'>
        Add Task
      </button>
    </form>
  );
  
}

export default TareaFormulario;