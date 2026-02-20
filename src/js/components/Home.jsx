import React from "react";
import AgregarTareas from "./AgregarTareas";

const Home = () => {
	
	return (
		<>
			<div>
				<div className='title'>
					<h1>Lista de Tareas</h1>
				</div>
				<AgregarTareas />
			</div>
		</>
	);
};

export default Home;