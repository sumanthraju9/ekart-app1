import React from 'react'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom';

const Fridge = () => {

    const firstfive=fridgeData.slice(0,5);
  return (
    <>
    <div className="home-banner2">
      <img
        src="canva2.png"
        alt="Main Banner"
        className="banner-image2"
      />

     
    </div>
    
    <h3>“Keep it cool — energy-efficient fridges for every home!”</h3>
    <div className="fridge">
      {
        firstfive.map((item)=>{

            return (
              <Link to={`/fridge/${item.id}`}>
              <div>
                <img src={item.image} className="fridimg" />
              </div>
            </Link>
            
                
            )
        }
        
        )
      }
    </div>
    </>
  )
}

export default Fridge
