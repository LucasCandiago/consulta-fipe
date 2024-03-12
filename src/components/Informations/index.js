import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Information() {
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [data, setData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.dados) {
      setBrand(location.state.dados.brand);
      setYear(location.state.dados.year);
      setModel(location.state.dados.model);
    }
  }, [location.state]);

  useEffect(() => {
    if (brand && year && model) {
      fetch(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brand}/modelos/${model}/anos/${year}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao acessar API");
          }
          return response.json();
        })
        .then((result) => {
          setData(result);
        })
        .catch((error) => {
          console.error("Erro ao acessar API:", error);
        });
    }
  }, [brand, model, year]);

  if (!data) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container text-center">
      <h1>
        {data.Marca} <br /> {data.Modelo}
      </h1>
      <p className="my-3">Valor: {data.Valor}</p>
      <p>Referência: {data.MesReferencia}</p>
    </div>
  );
}

export default Information;
