import React, { useState, useEffect } from "react";
import Years from "../Years";

function Cars({ brandCode }) {
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos`
    )
      .then((response) => response.json())
      .then((data) => setModels(data["modelos"]))
      .catch((e) => console.log("Erro ao acessar api: ", e));
  }, [brandCode]);

  const handleModel = (e) => {
    setSelectedModel(e.target.value);
  };

  return (
    <div className="my-4">
      <p>Selecione o modelo:</p>
      <select id="cars" className="form-control" onChange={handleModel}>
        {models.map((model) => (
          <option key={model.codigo} value={model.codigo}>
            {model.nome}
          </option>
        ))}
      </select>

      {selectedModel && <Years brandCode={brandCode} model={selectedModel} />}
    </div>
  );
}

export default Cars;
