import React from 'react'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom';

const Watch = () => {

    const firstfive=watchData.slice(0,5);
  return (
    <>
    
    
    <h3>“Time meets technology — explore our smart and classic watches!”</h3>
    <div className="watch">
      {
firstfive.map((item)=>{

    return(
      <Link to={`/watch/${item.id}`}>
      <div>
        <img src={item.image} className="watchimg" />
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

export default Watch
