import React, { useState } from 'react'
import "./AgregarTareas.css"

function AgregarTareas() {
  const [agregarTarea, setAgregarTarea] = useState("");
  const [tareaPendiente, setTareaPendiente] = useState([]);
  const [mostrar, setMostrar] = useState(false);

  return (
    <>
      <div className='container'>
        
          <input
            type="text"
            onChange={(e) => setAgregarTarea(e.target.value)}
            value={agregarTarea}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setTareaPendiente(tareaPendiente.concat([agregarTarea]));
                setAgregarTarea("");
              }
            }}
            placeholder='Agrega una nueva tarea' />
          <ul>
            {tareaPendiente.map((tarea, index) => (
              <li key={index}>
                <div onMouseEnter={() => setMostrar(true)} onMouseLeave={() => setMostrar(false)}>
                  {tarea}
                  {mostrar && <span className="fs-4" onClick={() => setTareaPendiente(tareaPendiente.filter((t, currentindex) => index != currentindex))}>❌</span>}
                </div>
              </li>
            ))}

          </ul>
        
        <div>
          {tareaPendiente.length === 0 ? ("No hay tareas pendientes") : (tareaPendiente.length + " Tareas pendientes") }
        </div>
      </div>
    </>
  )
}

export default AgregarTareas;