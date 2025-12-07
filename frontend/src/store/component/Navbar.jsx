import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/Cartcontext";
import { useAuthStore } from "../../auth/authStore";


const Navbar = () => {
  const { cartitem } = useCart();
  const { user, logout, token } = useAuthStore();

  return (
    <>
      <div className="navbar">
        <div>
          <Link to="/">
            <img
              src="/ekart.jpg"
              alt="logo"
              width="40"
              height="40"
              className="logo"
            />
          </Link>
        </div>

        <div>
          <input type="text" className="search" placeholder="search..." /> search
        </div>

        {!token ? (
          <Link to="/login" className="signin">
            Signin/Signup
          </Link>
        ) : (
          <button
            onClick={logout}
            className="signin"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              color: "white",
            }}
          >
            Logout
          </button>
        )}

        <Link to="/usecart">
          <div className="cart-wrapper">
            <img
              src="/kart2.png"
              alt="cart"
              width="40"
              height="40"
              className="kart"
            />
            {cartitem.length > 0 ? (
              <span className="cart-count">{cartitem.length}</span>
            ) : null}
          </div>
        </Link>
      </div>

      <div className="subbar">
        <ul>
          <Link to="/computer">
            <li>Computers</li>
          </Link>
          <Link to="/fridge">
            <li>Fridges</li>
          </Link>
          <Link to="/mobile">
            <li>Mobiles</li>
          </Link>
          <Link to="/watch">
            <li>Watches</li>
          </Link>
          <Link to="/tv">
            <li>Tv's</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
