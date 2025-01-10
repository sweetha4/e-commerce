import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  const [cart, setCart] = useState(() => {
    // Get cart items from localStorage
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : []; // Return saved cart or empty array
  });

  const navigate = useNavigate();

  // Handle Buy Now action
  const handleBuyNow = () => {
    // Pass the entire cart to the checkout page
    navigate('/checkout', { state: { cart } });
  };

  // Handle Remove from Cart action
  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.productId !== productId);
    setCart(updatedCart);

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h2 className="head">Your Cart</h2>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2 className="head">Your Cart</h2>

      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>Price: Rs {item.price}</p>
              {/* Optionally display filters if needed */}
              <button onClick={() => handleRemoveFromCart(item.productId)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <button className="buy-now-button" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default CartPage;
