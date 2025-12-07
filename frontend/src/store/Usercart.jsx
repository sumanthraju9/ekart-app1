import React from "react";
import { useCart } from "./context/Cartcontext";
import Navbar from "./component/Navbar";


const Usercart = () => {
  const { cartitem, removecart } = useCart();

  return (
    <div className="cart-container">
        <Navbar/>
      <h2>Your Cart</h2>

      {cartitem.length === 0 ? (
        <p className="empty-text">No items in cart.</p>
      ) : (
        cartitem.map((item, id) => (
          <div key={id} className="cart-item">
            <img src={item.image} alt={item.model} className="cart-img" />
            <div className="cart-details">
              <h3>{item.company}</h3>
              <p>{item.model}</p>
              <p>₹{item.price}</p>
              <button
                className="remove-btn"
                onClick={() => removecart(item)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Usercart;
