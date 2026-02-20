import React, { useState } from 'react'
import "./AgregarTareas.css"

function AgregarTareas({tareaPendiente, funcionalidad}) {
  const [agregarTarea, setAgregarTarea] = useState("");
  return (
    <>
      <div>
          <input
            type="text"
            onChange={(e) => setAgregarTarea(e.target.value)}
            value={agregarTarea}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                funcionalidad(tareaPendiente.concat([agregarTarea]));
                setAgregarTarea("");
              }
            }}
            placeholder='Agrega una nueva tarea' />
      </div>
    </>
  )
}

export default AgregarTareas;