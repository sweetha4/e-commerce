import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, title, price } = location.state || {};  // Extract product details from location.state

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  // Handle form submission
  const handleProceed = () => {
    // Here, you can add validation logic for the card details if needed
    alert('Payment successful! Redirecting to homepage...');

    // Redirect to homepage after payment is processed
    navigate('/');
  };

  return (
    <div className="payment-page">
      <h2>Payment</h2>
      <div className="product-info">
        <img src={image} alt={title} className="product-image" />
        <h3>{title}</h3>
        <p>Price: Rs {price}</p>
      </div>

      <div className="payment-form">
        <div>
          <label>Card Number</label>
          <input 
            type="text" 
            placeholder="Enter your card number" 
            value={cardNumber} 
            onChange={(e) => setCardNumber(e.target.value)} 
          />
        </div>

        <div>
          <label>Expiry Date</label>
          <input 
            type="text" 
            placeholder="MM/YY" 
            value={expiryDate} 
            onChange={(e) => setExpiryDate(e.target.value)} 
          />
        </div>

        <div>
          <label>CVV</label>
          <input 
            type="text" 
            placeholder="CVV" 
            value={cvv} 
            onChange={(e) => setCvv(e.target.value)} 
          />
        </div>

        <button onClick={handleProceed} className='pay'>Proceed</button>
      </div>
    </div>
  );
};

export default PaymentPage;
