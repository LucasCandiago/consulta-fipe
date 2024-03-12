import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Years({ brandCode, model }) {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandCode}/modelos/${model}/anos`
    )
      .then((response) => response.json())
      .then((data) => setYears(data))
      .catch((e) => console.log("Erro ao acessar api: ", e));
  }, [brandCode, model]);

  const handleYear = (e) => {
    setSelectedYear(e.target.value);
  };

  const navigate = useNavigate();

  const renderInfo = (brand, year, model) => {
    const data = { brand: brand, year: year, model: model };
    navigate("/informations", { state: { dados: data } });
  };

  return (
    <div className="my-4">
      <p>Selecione o ano: </p>
      <select id="years" className="form-control" onChange={handleYear}>
        <option value="">Selecione um ano</option>
        {years.map((year) => (
          <option key={year.codigo} value={year.codigo}>
            {year.nome !== "32000 Gasolina" ? year.nome : "Zero Km Gasolina"}
          </option>
        ))}
      </select>

      {selectedYear && (
        <button
          onClick={() => renderInfo(brandCode, selectedYear, model)}
          className="btn btn-primary my-4"
        >
          Ver Preço
        </button>
      )}
    </div>
  );
}

export default Years;
