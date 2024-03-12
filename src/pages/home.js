import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center">
      <h1>O que você quer fazer?</h1>
      <div className="row justify-content-center">
        <Link to="/placas" className="btn btn-primary col-lg-3 mx-1 my-4">
          <button className="btn btn-primary">Consultar FIPE pela Placa</button>
        </Link>
        <Link to="/modelos" className="btn btn-primary col-lg-3 mx-1 my-4">
          <button className="btn btn-primary">
            Consultar FIPE pelo Modelo
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
