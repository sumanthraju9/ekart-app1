import React, { useState } from "react";
import { computerData } from "../data/computers";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

const Computerpage = () => {
  const [selectedproduct, setSelectedproduct] = useState([]);

  const companies = [...new Set(computerData.map((item) => item.company))];

  const companyhandler = (mango) => {
    if (selectedproduct.includes(mango)) {
      setSelectedproduct(selectedproduct.filter((item) => item !== mango));
    } else {
      setSelectedproduct([...selectedproduct, mango]);
    }
  };

  const filteredproduct =
    selectedproduct.length === 0
      ? computerData
      : computerData.filter((orange) =>
          selectedproduct.includes(orange.company)
        );

  return (
    <>
      <Navbar />

      <div className="filter-section">
        <div>Filter --</div>
        {companies.map((company) => (
          <label key={company}>
            <input
              type="checkbox"
              checked={selectedproduct.includes(company)}
              onChange={() => companyhandler(company)}
            />
            {company}
          </label>
        ))}
      </div> <div className="home-banner">
      <img
        src="laptopbanner.jpg"
        alt="Main Banner"
        className="banner-image3"
      />
      </div>


      <div className="pagesection1">
        {filteredproduct.map((item) => (
          <div key={item.id}>
            <Link to={`/computer/${item.id}`}>
              <img src={item.image} alt="" className="sectionimg1" />
            </Link>
            <h3>
              {item.company}, {item.model}
            </h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Computerpage;
