import React from 'react'
import { useParams } from 'react-router-dom'
import { tvData } from '../../data/tv'
import Navbar from '../Navbar';
import { useCart } from '../../context/Cartcontext';

const Tvsingle = () => {

    const {id}=useParams();

    const product=tvData.find((item)=>item.id===id)
    const {addtocart,cartitem}=useCart();

  return (
    <>
    <Navbar/>
    <div className="singleimgs4">
        <img src={product.image} alt="" className="singleimg4" />

        <div className="product-details4">
            <h1>{product.brand}</h1>
            <h1>{product.model}</h1>
            <h2>{product.price}</h2>
            <p>{product.description}</p>
            <button className="add-btn4" onClick={()=> addtocart(product)}>Add to Cart</button>
        </div>

    </div>
    </>
  )
}


export default Tvsingle
