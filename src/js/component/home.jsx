import React from "react";
import Simple from "./Simple";


const Home = () => {
  return (
    <div className="text-center">
      <div className="card text-center">
        <div className="card-header">CONTADOR SIMPLE CON REACT</div>
        <div className="card-body" style={{padding:"10px", margin:"20px"}}>
			<div>
				<Simple/> 
			</div>	
				<h5 className="card-title"> </h5>
		{/* //////////////// BOTONES //////////////////        */}
				<a href="#" className="btn btn-primary btnAdd">
					Incrementar
				</a>
				<a href="#" className="btn btn-primary btnDecre">
					Decrementar
				</a>
				<a href="#" className="btn btn-primary btnReset">
					Reset
				</a>

        </div>
        <div className="card-footer text-muted">CONTADOR SIMPLE - JUANCHO ALZATE</div>
      </div>
    </div>
  );
};

export default Home;
