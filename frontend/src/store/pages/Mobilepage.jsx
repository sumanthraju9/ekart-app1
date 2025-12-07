import React, { useState } from "react";
import { mobileData } from "../data/mobiles";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

const Mobilepage = () => {
  const [selectedproduct, setSelectedproduct] = useState([]);

  
  const companies = [...new Set(mobileData.map((item) => item.company))];

  
  const companyhandler = (mango) => {
    if (selectedproduct.includes(mango)) {
      
      setSelectedproduct(selectedproduct.filter((item) => item !== mango));
    } else {
     
      setSelectedproduct([...selectedproduct, mango]);
    }
  };

  
  const filteredproduct =
    selectedproduct.length === 0
      ? mobileData
      : mobileData.filter((orange) =>
          selectedproduct.includes(orange.company)
        );

  return (
    <>
    <Navbar />
    
     
    <div className="filter-section">
      <div>Filter--</div>
  {mobileData.map((phone) => (
    <label key={phone.company}>
      <input
        type="checkbox"
        checked={selectedproduct.includes(phone.company)}
        onChange={() => companyhandler(phone.company)}
      />
      {phone.company}
    </label>
  ))}
</div>
<div className="home-banner">
      <img
        src="mobilebanner.jpg"
        alt="Main Banner"
        className="banner-image2"
      />
      </div>

<div className="pagesection3">
  {filteredproduct.map((item) => (
    <div key={item.id}>
      <Link to={`/mobile/${item.id}`}>
        <img src={item.image} alt="" className="sectionimg3" />
      </Link>
      <h3>{item.company}, {item.model}</h3>
      <p>{item.price}</p>
    </div>
  ))}
</div>

    </>
  );
};

export default Mobilepage;
