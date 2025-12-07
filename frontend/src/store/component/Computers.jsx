import React from 'react';
import { computerData } from '../data/computers'; 
import { Link } from 'react-router-dom';

const Computers = () => {

  const firstfive= computerData.slice(0,5);
  return (
    <>

    
   <h3>Best Sellers in Computers & Accessories</h3>
    <div className="computer">
     {

firstfive.map((iterm)=>{

return(
  <Link to={`/computer/${iterm.id}`}>
  <div>
    <img src={iterm.image} className="compimgs" />
    <h3>{iterm.price}</h3>
  </div>
</Link>


)

})

     }
    </div>
        
    </>
  )
}

export default Computers
