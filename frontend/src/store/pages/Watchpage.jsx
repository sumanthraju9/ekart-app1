import React, { useState } from "react";
import { watchData } from "../data/watch";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";


const Watchpage = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);


  const brands = [...new Set(watchData.map((item) => item.brand))];

 
  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };


  const filteredWatches =
    selectedBrands.length === 0
      ? watchData
      : watchData.filter((watch) => selectedBrands.includes(watch.brand));

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
        src="watches4.jpg"
        alt="Main Banner"
        className="banner-image3"
      />
      </div>

      <div className="pagesection4">
        {filteredWatches.map((item) => (
          <div key={item.id}>
            <Link to={`/watch/${item.id}`}>
              <img src={item.image} alt={item.model} className="sectionimg4" />
            </Link>
            <h3>
              {item.brand}, {item.model}
            </h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Watchpage;
