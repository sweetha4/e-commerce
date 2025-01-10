import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BuyNowPhonePage.css';

const BuyNowPhonePage = () => {
  const location = useLocation(); 
  const navigate = useNavigate();
  const { image, title, price } = location.state || {}; 

  const handleAddToCart = () => {
    const product = { image, title, price, productId: Date.now() };
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    savedCart.push(product);
    localStorage.setItem('cart', JSON.stringify(savedCart));
    alert('Product added to cart!');
    navigate('/cart'); 
  };

  const handleBuyNow = () => {
    navigate('/payment', { state: { image, title, price } }); 
  };

  return (
    <div className="buy-now-phone-page">
      <div className="product-info">
        <h2>{title}</h2>
        <img src={image} alt={title} className="product-image" />
        <p className="price">Rs {price}</p>

        {/* Buttons to Add to Cart or Buy Now */}
        <div className="buttons">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BuyNowPhonePage;
