import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { state } = useLocation();
  const { cart } = state || {};  
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/'); 
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cart && cart.length > 0 ? (
        <div className="checkout-items">
          {cart.map((item, index) => (
            <div key={index} className="checkout-item">
              <img src={item.image} alt={item.title} className="checkout-item-image" />
              <div className="checkout-item-details">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Price: Rs{item.filters.price}</p>
                <p>GB: {item.filters.gb} GB</p>
                <p>Color: {item.filters.color}</p>
                <p>Storage: {item.filters.storage}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <button onClick={handleProceed} className="proceed-btn">
        Proceed
      </button>
    </div>
  );
};

export default CheckoutPage;
