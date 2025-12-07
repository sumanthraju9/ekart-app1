import React from 'react'
import { tvData } from '../data/tv'
import { Link } from 'react-router-dom';

const Tv = () => { 

    const firstfive=tvData.slice(0,5);
  return (
    <>
     <div className="home-banner">
      <img
        src="canve9.png"
        alt="Main Banner"
        className="banner-image"
      />
      </div>
    <h3>“Bring the cinema home — stunning clarity, smarter entertainment!”</h3>
   
    <div className="tv">
      {
        firstfive.map((item)=>{
            return(
              <Link to={`/tv/${item.id}`}>
              <div>
                <img src={item.image} className="tvimg" />
                <h3>{item.price}</h3>
              </div>
            </Link>
            
            )
        })
      }
    </div>
    </>
  )
}

export default Tv
