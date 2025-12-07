import React from 'react'
import { useParams } from 'react-router-dom'
import { computerData } from '../../data/computers'
import Navbar from '../Navbar';
import { useCart } from '../../context/Cartcontext';

const Computersingle = () => {
  const { id } = useParams();

  // find product in the correct dataset
  const product = computerData.find((item) => item.id === id);

  // if not found (optional safety)
   const {addtocart,cartitem}=useCart();
 

  return (
    <>
    <Navbar/>
    <div className="singleimgs1">
  <img src={product.image} alt={product.company} className="singleimg1" />
  
  <div className="product-details">
    <h1>{product.company}</h1>
    <h1>{product.model}</h1>
    <h2>₹{product.price}</h2>
    <p>{product.description}</p>
    <button className="add-btn" onClick={()=>addtocart(product)}>Add to Cart</button>
   
  </div>
</div>
      
    </>
  )
}

export default Computersingle;
