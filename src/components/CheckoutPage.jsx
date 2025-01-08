import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { state } = useLocation();
  const { cart } = state || {};  
  const navigate = useNavigate();
  
  const [isPaymentPage, setIsPaymentPage] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleProceed = () => {
    setIsPaymentPage(true);
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    
    if (paymentDetails.cardNumber && paymentDetails.expiryDate && paymentDetails.cvv) {
      alert("Payment Successful!");
      navigate('/');  
    } else {
      alert("Please fill in all the payment details.");
    }
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
                <p>Price: Rs{item.filters?.price}</p>
                <p>GB: {item.filters?.gb} GB</p>
                <p>Color: {item.filters?.color}</p>
                <p>Storage: {item.filters?.storage}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}

      {!isPaymentPage && (
        <button onClick={handleProceed} className="proceed-btn">
          Proceed to Payment
        </button>
      )}

      {isPaymentPage && (
        <div className="payment-form">
          <h3>Payment Details</h3>
          <form onSubmit={handleSubmitPayment}>
            <div className="input-group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handlePaymentChange}
                placeholder="Enter your card number"
                maxLength="16" 
                pattern="\d{16}" 
                required
              />
            </div>

            <div className="input-group">
              <label>Expiry Date (MM/YY)</label>
              <input
                type="text"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handlePaymentChange}
                placeholder="MM/YY"
                maxLength="5" 
                pattern="^(0[1-9]|1[0-2])\/\d{2}$" 
                required
              />
            </div>

            <div className="input-group">
              <label>CVV</label>
              <input
                type="password"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handlePaymentChange}
                placeholder="Enter CVV"
                maxLength="3" 
                pattern="\d{3}" 
                required
              />
            </div>

            <button type="submit" className="payment-btn">Submit Payment</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
