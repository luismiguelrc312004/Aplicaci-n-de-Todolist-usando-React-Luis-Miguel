import React,{useState} from "react";
import AgregarTareas from "./AgregarTareas";
import ListaTareas from "./ListaTareas";
import TotalTareas from "./TotalTareas";
import "./Home.css"

const Home = () => {
	
  const [tareaPendiente, setTareaPendiente] = useState([]);

	return (
		<>
			<div className="container">
				<div className='title'>
					<h1>Lista de Tareas</h1>
				</div>
				<AgregarTareas tareaPendiente={tareaPendiente} funcionalidad={setTareaPendiente}/>
				<ListaTareas tareaPendiente={tareaPendiente} funcionalidad={setTareaPendiente}/>
				<TotalTareas tareaPendiente={tareaPendiente}/>
			</div>
		</>
	);
};

export default Home;