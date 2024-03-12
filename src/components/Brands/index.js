import React, { useEffect, useState } from "react";
import Cars from "../Cars";

function Brands() {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then((response) => response.json())
      .then((data) => setBrands(data))
      .catch((e) => console.log("Erro ao acessar api"));
  }, []);

  const handleBrand = (e) => {
    setSelectedBrand(e.target.value);
  };

  return (
    <div>
      <p>Selecione uma marca: </p>
      <select id="brands" className="form-control" onChange={handleBrand}>
        {brands.map((brand) => (
          <option key={brand.codigo} value={brand.codigo}>
            {brand.nome}
          </option>
        ))}
      </select>
      {selectedBrand && <Cars brandCode={selectedBrand} />}
    </div>
  );
}

export default Brands;
