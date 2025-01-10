import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { cart } = location.state || {};  // Retrieve the cart from the location state

  if (!cart || cart.length === 0) {
    return (
      <div className="checkout-page">
        <h2>Your Checkout is Empty</h2>
        <p>There are no items in your cart.</p>
      </div>
    );
  }

  // Handle Confirm Purchase action
  const handleConfirmPurchase = () => {
    // You can choose to navigate to BuyNowPhonePage with the first item in the cart (or other logic)
    const firstItem = cart[0];  // Using the first item in the cart as an example

    // Navigate to BuyNowPhonePage with the product details
    navigate('/buy-now', { state: { 
      image: firstItem.image, 
      title: firstItem.title, 
      price: firstItem.price 
    } });
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-items">
        {cart.map((item, index) => (
          <div key={index} className="checkout-item">
            <img src={item.image} alt={item.title} className="checkout-item-image" />
            <div className="checkout-item-details">
              <h3>{item.title}</h3>
              <p>Price: Rs {item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <button className="confirm-purchase-button" onClick={handleConfirmPurchase}>
          Confirm Purchase
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
