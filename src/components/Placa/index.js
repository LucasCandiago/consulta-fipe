import React, { useState, useEffect } from "react";

function Placa() {
  const [placaData, setPlacaData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
          "Authorization": "Bearer Token",
          "DeviceToken": "d3a32039-97e9-45f7-b345-3ca8a51eb428"
        },
        body: JSON.stringify({
          placa: "CSZ5H16"
        })
      };

      fetch("https://gateway.apibrasil.io/api/v2/vehicles/fipe", settings)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro ao acessar API");
          }
          return response.json();
        })
        .then((data) => {
          setPlacaData(data);
        })
        .catch((error) => {
          console.error("Erro ao acessar API:", error);
        });
    };

    fetchData();
  }, []);

  if (!placaData) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container text-center">
      <p>Marca: {placaData.marca}</p>
      <p>Modelo: {placaData.modelo}</p>
      <p>Ano: {placaData.ano}</p>
    </div>
  );
}

export default Placa;
