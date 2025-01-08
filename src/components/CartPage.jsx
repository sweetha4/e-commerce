import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';
const CartPage = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/checkout', { state: { cart } });
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.productId !== productId);
    setCart(updatedCart);
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
              <p>{item.description}</p>
              <p>Price: Rs{item.filters?.price }</p> 
              <p>GB: {item.filters?.gb || 'N/A'} GB</p>
              <p>Color: {item.filters?.color || 'N/A'}</p>
              <p>Storage: {item.filters?.storage || 'N/A'}</p>
              <p>Model: {item.filters?.model || 'N/A'}</p>
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
