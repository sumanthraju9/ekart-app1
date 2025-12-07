import React from 'react'
import { useParams } from 'react-router-dom'
import { watchData } from '../../data/watch'
import Navbar from '../Navbar';
import { useCart } from '../../context/Cartcontext';

const Watchsingle = () => {

    const {id}=useParams();

    const product=watchData.find((item)=>item.id===id)
    const {addtocart,cartitem}=useCart();
  return (
    <>
    <Navbar/>
    <div className="singleimgs5">
        <img src={product.image} alt="" className="singleimg5" />

        <div className="product-details5">
            <h1>{product.brand}</h1>
            <h1>{product.model}</h1>
            <h2>{product.price}</h2>
            <p>{product.description}</p>
            <button className="add-btn5" onClick={()=>addtocart(product)}>Add to Cart</button>
        </div>
    </div>
    </>
  )
}

export default Watchsingle
