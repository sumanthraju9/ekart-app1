import React from 'react'
import { useParams } from 'react-router-dom'
import { fridgeData } from '../../data/fridge'
import Navbar from '../Navbar';
import { useCart } from '../../context/Cartcontext';

const Fridgesingle = () => {

const {id}=useParams();

const product=fridgeData.find((item)=>item.id===id)
const {addtocart,cartitem}=useCart();

  return (
    <>
    <Navbar/>
    <div className="singleimgs2">
        <img src={product.image} alt="" className="singleimg2" />
        
        <div className="product-detals2">
            <h1>{product.brand}</h1>
            <h1>{product.model}</h1>
            <h2>{product.price}</h2>
            <p>{product.description}</p>
            <button className="add-btn2" onClick={()=> addtocart(product)}>Add to Cart</button>
        </div>

    </div>
    </>
  )
}

export default Fridgesingle
