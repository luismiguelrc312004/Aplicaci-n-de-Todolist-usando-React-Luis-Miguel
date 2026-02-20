import React from 'react'
import ItemTarea from './ItemTarea';
import "./ListaTareas.css"

function ListaTareas({tareaPendiente, funcionalidad}) {
  return (
    <div>
        <ul>
            {tareaPendiente.map((tarea, index) => (
              <ItemTarea key={index} tarea={tarea} tareaPendiente={tareaPendiente} funcionalidad={funcionalidad} index={index}/>
            ))}

          </ul>
    </div>
  )
}

export default ListaTareas