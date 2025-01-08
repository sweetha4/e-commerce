import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import Advertisement from './components/Advertise';
import SellingAd from './components/SellingAd';
import CategoriesList from './components/CategoryList';
import Footer from './components/Footer';
import LoginLink from './components/LoginLink/LoginLink';
import ForgotPassword from './components/ForgotPassword/ForgotPassword'; 
import SignUp from './components/SignUpPage/SignUpPage';  
import LoginPage from './components/LoginPage/LoginPage';
import LandingPage from './components/LandingPage/LandingPage';
import BuyPhonePage from './components/BuyPhonePage/BuyPhonePage'; 
import BuyPhoneDetailsPage from './components/BuyPhoneDetailsPage/BuyPhoneDetailsPage';
import CartPage from './components/CartPage';
import { CartProvider } from './components/context/CartContext';
import CheckoutPage from './components/CheckoutPage';
import { Provider } from 'react-redux';  
import store from './components/redux/store'; 
const App = () => {
  return (
    <CartProvider> 
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app-container">
            <header className="header">
              <SearchBar />
              <LoginLink />
            </header>

            <section className="main-content">
              <Advertisement />
              <SellingAd />
              <CategoriesList />
            </section>
            <Footer />
          </div>
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/buy-phone/:id" element={<BuyPhonePage />} />
        <Route path="/buy-phone-details" element={<BuyPhoneDetailsPage />} />
        <Route path="/cart" element={<CartPage />} /> 
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
    </CartProvider>
  );
};

export default App;
