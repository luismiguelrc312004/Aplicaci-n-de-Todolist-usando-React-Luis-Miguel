import React,{useState} from 'react'
import "./ItemTarea.css"

function ItemTarea({tarea, tareaPendiente, funcionalidad, index}) {

    const [mostrar, setMostrar] = useState(false);

    return (
        <li>
            <div onMouseEnter={() => setMostrar(true)} onMouseLeave={() => setMostrar(false)}>
                {tarea}
                {mostrar && <span className="fs-4 float-end cursor-pointer" onClick={() => funcionalidad(tareaPendiente.filter((t, currentindex) => index != currentindex))}>❌</span>}
            </div>
        </li>
    )
}

export default ItemTarea