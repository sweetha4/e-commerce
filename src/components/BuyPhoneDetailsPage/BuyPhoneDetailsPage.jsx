import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import'./BuyPhoneDetailsPage.css'

const BuyPhoneDetailsPage = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 

  const { filters, productId, image, title, price } = location.state || {}; 

  const handleProceedToPayment = () => {
    navigate('/login');
  };

  return (
    <div className="buy-phone-details-page">
      <h3>Phone Details</h3>
      <div className="product-details">
        <h2>{title}</h2>
        <img src={image} alt={title} className="product-image" />
        <p className="price">{price}</p>
      </div>
      <h2>Product ID: {productId}</h2>
      <h3>Selected Filters</h3>
      <p>Price: Rs. {filters?.price}</p>
      <p>GB: {filters?.gb} GB</p>
      <p>Color: {filters?.color}</p>
      <p>Model: {filters?.model}</p>
      <p>Storage: {filters?.storage}</p>

      <div>
        <button onClick={handleProceedToPayment}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default BuyPhoneDetailsPage;
