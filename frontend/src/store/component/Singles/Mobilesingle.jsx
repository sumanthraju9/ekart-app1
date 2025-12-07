import React from 'react'
import { useParams } from 'react-router-dom'
import { mobileData } from '../../data/mobiles';
import Navbar from '../Navbar';

import { useCart } from '../../context/Cartcontext';

const Mobilesingle = () => {

    const {id}=useParams();

    const {cartitem,addtocart}=useCart();

    const product= mobileData.find((item)=>item.id===id)
  return (
    <>
    <Navbar/>
    <div className="singleimgs3">
    <img src={product.image} alt="" className="singleimg3"  />

    <div className="product-detals3">
        
            <h1>{product.company}</h1>
            <h1>{product.model}</h1>
            <h2>{product.price}</h2>
            <p>{product.description}</p>
            <button className="add-btn3" onClick={()=>addtocart(product)}>Add to Cart</button>

            </div>

    </div>
    </>
  )
}

export default Mobilesingle
