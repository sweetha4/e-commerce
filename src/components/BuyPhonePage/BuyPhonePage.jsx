import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
import './BuyPhonePage.css';

const BuyPhonePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { image, title, description, price } = location.state || {};

  const { addToCart } = useCart();
  const savedFilters = JSON.parse(localStorage.getItem('filters')) || {
    price: 0,
    gb: 0,
    color: 'All',
    model: 'All',
    storage: 'All',
  };

  const [filters, setFilters] = useState(savedFilters);

  useEffect(() => {
    console.log("trigger")
    localStorage.setItem('filters', JSON.stringify(filters));
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleAddToCart = () => {
    const productDetails = {
      productId: id,
      image,
      title,
      description,
      price,
      filters, 
    };

    addToCart(productDetails); 
    navigate('/cart'); 
  };

  return (
    <div className="buy-phone-page">
      <div className="sidebar">
        <h3>Filter Options</h3>
        <div className="filter-group">
          <label>Price Range</label>
          <input 
            type="range" 
            min="20000" 
            max="100000" 
            name="price" 
            value={filters.price} 
            onChange={handleFilterChange} 
          />
          <p>Rs
            {filters.price}</p>
        </div>

        <div className="filter-group">
          <label>GB Range</label>
          <input 
            type="range" 
            min="16" 
            max="512" 
            name="gb" 
            value={filters.gb} 
            onChange={handleFilterChange} 
          />
          <p>{filters.gb} GB</p>
        </div>

        <div className="filter-group">
          <label>Color</label>
          <select name="color" value={filters.color} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Blue">Blue</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Model</label>
          <select name="model" value={filters.model} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="iPhone 13">iPhone 13 Pro</option>
            <option value="Samsung Galaxy S21">Samsung Galaxy Flip</option>
            <option value="OnePlus 9">Vivo yx200</option>
            <option value="OnePlus 9">Oppo A57</option>
            <option value="OnePlus 9">Oppo F27</option>
            <option value="OnePlus 9">One Plus 9</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Storage</label>
          <select name="storage" value={filters.storage} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="128GB">128GB</option>
            <option value="256GB">256GB</option>
            <option value="512GB">512GB</option>
          </select>
        </div>
      </div>

      <div className="main">
        <div className="product-info">
          <h2>{title}</h2>
          <img src={image} alt={title} className="product-image" />
          <p>{description}</p>
          <p className="price">Rs{price}</p>
        </div>

        <div className="filtered-results">
          <h3>Filtered Results</h3>
          <p>Price: Rs{filters.price}</p>
          <p>GB: {filters.gb} GB</p>
          <p>Color: {filters.color}</p>
          <p>Model: {filters.model}</p>
          <p>Storage: {filters.storage}</p>
        </div>

        <div>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default BuyPhonePage;
