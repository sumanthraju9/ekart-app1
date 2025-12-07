import React, { useState } from "react";
import { fridgeData } from "../data/fridge";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

const Fridgepage = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);


  const brands = [...new Set(fridgeData.map((item) => item.brand))];


  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };


  const filteredFridges =
    selectedBrands.length === 0
      ? fridgeData
      : fridgeData.filter((f) => selectedBrands.includes(f.brand));

  return (
    <>
      <Navbar />

      <div className="filter-section">
        <div>Filter by Brand:</div>
        {brands.map((brand) => (
          <label key={brand}>
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />
            {brand}
          </label>
        ))}
      </div>
      <div className="home-banner">
      <img
        src="fridgebanner.jpg"
        alt="Main Banner"
        className="banner-image3"
      />
      </div>

      <div className="pagesection2">
        {filteredFridges.map((item) => (
          <div key={item.id}>
            <Link to={`/fridge/${item.id}`}>
              <img src={item.image} alt={item.model} className="sectionimg2" />
            </Link>
            <h3>{item.brand}, {item.model}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Fridgepage;
