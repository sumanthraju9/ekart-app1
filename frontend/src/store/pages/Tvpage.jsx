import React, { useState } from "react";
import { tvData } from "../data/tv";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

const Tvpage = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);

 
  const brands = [...new Set(tvData.map((item) => item.brand))];

 
  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };


  const filteredTvs =
    selectedBrands.length === 0
      ? tvData
      : tvData.filter((tv) => selectedBrands.includes(tv.brand));

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
        src="tvbanner.jpg"
        alt="Main Banner"
        className="banner-image3"
      />
      </div>

      <div className="pagesection5">
        {filteredTvs.map((item) => (
          <div key={item.id}>
            <Link to={`/tv/${item.id}`}>
              <img src={item.image} alt={item.model} className="sectionimg5" />
            </Link>
            <h3>{item.brand}, {item.model}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tvpage;
