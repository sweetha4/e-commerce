// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useCart } from './context/CartContext'; 
// import './BuyProductPage.css';
// import product1 from '../assets/images/phone1.jpg';
// import product2 from '../assets/images/phone2.jpg';
// import product3 from '../assets/images/phone3.jpg';
// import product4 from '../assets/images/phone4.jpg';
// import product5 from '../assets/images/phone5.jpg';
// import product6 from '../assets/images/jeans1.jpg';
// import product7 from '../assets/images/jeans2.jpg';
// import product8 from '../assets/images/jeans3.jpg';
// import product9 from '../assets/images/jeans4.jpg';
// import product10 from '../assets/images/jeans5.jpg';
// import product11 from '../assets/images/machine1.jpg';
// import product12 from '../assets/images/machine2.jpg';
// import product13 from '../assets/images/machine3.jpg';
// import product14 from '../assets/images/machine4.jpg';
// import product15 from '../assets/images/machine5.jpg';
// import purchase1 from '../assets/images/puzzle1.jpg';
// import purchase2 from '../assets/images/puzzle2.jpg';
// import purchase3 from '../assets/images/puzzle3.jpg';
// import purchase4 from '../assets/images/puzzle4.jpg';
// import purchase5 from '../assets/images/puzzle5.jpg';
// import purchase6 from '../assets/images/book1.jpg';
// import purchase7 from '../assets/images/book2.jpg';
// import purchase8 from '../assets/images/book3.jpg';
// import purchase9 from '../assets/images/book4.jpg';
// import purchase10 from '../assets/images/book5.jpg';

// const BuyProductPage = () => {
//   const { category, subcategory } = useParams(); 
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   const defaultFilters = {
//     price: 0,
//     gb: 0,
//     color: 'All',
//     model: 'All',
//     storage: 'All',
//   };

//   // Product lists for categories
//   const products = {
//     electronics: {
//       phone: [
//         { id: 1, image: product1, title: 'iPhone 13', price: 70000 },
//         { id: 2, image: product2, title: 'Samsung Galaxy S21', price: 75000 },
//         { id: 3, image: product3, title: 'OnePlus 9', price: 65000 },
//         { id: 4, image: product4, title: 'Oppo F27', price: 35000 },
//         { id: 5, image: product5, title: 'Vivo YX200', price: 25000 },
//       ],
//     },
//     clothing: {
//         jeans: [
//             {image: product6, title: 'Baggy',price:1543},
//             {image: product7, title: 'Pencil Fit', price:1789},
//             {image: product8, title: 'Straight', price:2987},
//             {image: product9, title: 'Torn',price:3984},
//             {image: product10, title: 'Slim Fit',price:1899},
//         ]
//     },
//     home_appliances: {
//     refrigerator: [
//             {image:product11, price:10899},
//             {image:product12, price:20986},
//             {image:product13, price:60987},
//             {image:product14, price:90754},
//             {image:product15, price:34098},
//     ]
//     },
//     toys: {
//         puzzles: [
//             {image:purchase1, price:908},
//             {image:purchase2, price:678},
//             {image:purchase3, price:1098},
//             {image:purchase4, price:789},
//             {image:purchase5, price:890},
//         ]
//     },
//     books:{
//         fiction:[
//             {image:purchase6, price:599},
//             {image:purchase7, price:799},
//             {image:purchase8, price:899},
//             {image:purchase9, price:677},
//             {image:purchase10, price:809},
//         ]
//     },
//   };

//   const categoryData = products[category] || {};
//   const productData = categoryData[subcategory.toLowerCase()] || [];

//   const [filters, setFilters] = useState(defaultFilters);

//   useEffect(() => {
//     localStorage.setItem('filters', JSON.stringify(filters));
//   }, [filters]);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//   };

//   const handleAddToCart = (product) => {
//     const productDetails = { ...product, filters };
//     addToCart(productDetails);
//     navigate('/cart');
//   };

//   return (
//     <div className="buy-product-page">
//       <div className="sidebar">
//         <h3>Filter Options</h3>
//         <div className="filter-group">
//           <label>Price Range</label>
//           <input
//             type="range"
//             min="1000"
//             max="100000"
//             name="price"
//             value={filters.price}
//             onChange={handleFilterChange}
//           />
//           <p>Rs {filters.price}</p>
//         </div>
//         <div className="filter-group">
//           <label>GB Range</label>
//           <input
//             type="range"
//             min="16"
//             max="512"
//             name="gb"
//             value={filters.gb}
//             onChange={handleFilterChange}
//           />
//           <p>{filters.gb} GB</p>
//         </div>
//         <div className="filter-group">
//           <label>Color</label>
//           <select name="color" value={filters.color} onChange={handleFilterChange}>
//             <option value="All">All</option>
//             <option value="Black">Black</option>
//             <option value="White">White</option>
//             <option value="Blue">Blue</option>
//           </select>
//         </div>
//         <div className="filter-group">
//           <label>Model</label>
//           <select name="model" value={filters.model} onChange={handleFilterChange}>
//             <option value="All">All</option>
//             <option value="iPhone 13">iPhone 13 Pro</option>
//             <option value="Samsung Galaxy S21">Samsung Galaxy S21</option>
//             <option value="OnePlus 9">OnePlus 9</option>
//             <option value="Oppo F27">Oppo F27</option>
//             <option value="Vivo YX200">Vivo YX200</option>
//           </select>
//         </div>
//         <div className="filter-group">
//           <label>Storage</label>
//           <select name="storage" value={filters.storage} onChange={handleFilterChange}>
//             <option value="All">All</option>
//             <option value="128GB">128GB</option>
//             <option value="256GB">256GB</option>
//             <option value="512GB">512GB</option>
//           </select>
//         </div>
//       </div>

//       <div className="main">
//         <h2>{subcategory}</h2>

//         <div className="product-list">
//           {productData.slice(0, 5).map((product) => (
//             <div key={product.id} className="product-item">
//             <img 
//               src={product.image} 
//               alt={product.title} 
//               className="product-image"
//             />
//             <h3>{product.title}</h3>
//             <p>Price: Rs {product.price}</p>
//             <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//           </div>          
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyProductPage;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './context/CartContext'; 
import './BuyProductPage.css';
import product1 from '../assets/images/phone1.jpg';
import product2 from '../assets/images/phone2.jpg';
import product3 from '../assets/images/phone3.jpg';
import product4 from '../assets/images/phone4.jpg';
import product5 from '../assets/images/phone5.jpg';
import product6 from '../assets/images/jeans1.jpg';
import product7 from '../assets/images/jeans2.jpg';
import product8 from '../assets/images/jeans3.jpg';
import product9 from '../assets/images/jeans4.jpg';
import product10 from '../assets/images/jeans5.jpg';
import product11 from '../assets/images/machine1.jpg';
import product12 from '../assets/images/machine2.jpg';
import product13 from '../assets/images/machine3.jpg';
import product14 from '../assets/images/machine4.jpg';
import product15 from '../assets/images/machine5.jpg';
import purchase1 from '../assets/images/puzzle1.jpg';
import purchase2 from '../assets/images/puzzle2.jpg';
import purchase3 from '../assets/images/puzzle3.jpg';
import purchase4 from '../assets/images/puzzle4.jpg';
import purchase5 from '../assets/images/puzzle5.jpg';
import purchase6 from '../assets/images/book1.jpg';
import purchase7 from '../assets/images/book2.jpg';
import purchase8 from '../assets/images/book3.jpg';
import purchase9 from '../assets/images/book4.jpg';
import purchase10 from '../assets/images/book5.jpg';

const BuyProductPage = () => {
  const { category, subcategory } = useParams(); 
  const navigate = useNavigate();
  
  const defaultFilters = {
    price: 0,
    gb: 0,
    color: 'All',
    model: 'All',
    storage: 'All',
  };

  // Product lists for categories
  const products = {
    electronics: {
      phone: [
        { id: 1, image: product1, title: 'iPhone 13', price: 70000 },
        { id: 2, image: product2, title: 'Samsung Galaxy', price: 75000 },
        { id: 3, image: product3, title: 'OnePlus 9', price: 65000 },
        { id: 4, image: product4, title: 'Oppo F27', price: 35000 },
        { id: 5, image: product5, title: 'Vivo YX200', price: 25000 },
      ],
    },
    clothing: {
      jeans: [
        { image: product6, title: 'Baggy', price: 1543 },
        { image: product7, title: 'Pencil Fit', price: 1789 },
        { image: product8, title: 'Straight', price: 2987 },
        { image: product9, title: 'Torn', price: 3984 },
        { image: product10, title: 'Slim Fit', price: 1899 },
      ],
    },
    home_appliances: {
      refrigerator: [
        { image: product11, price: 10899 },
        { image: product12, price: 20986 },
        { image: product13, price: 60987 },
        { image: product14, price: 90754 },
        { image: product15, price: 34098 },
      ],
    },
    toys: {
      puzzles: [
        { image: purchase1, price: 908 },
        { image: purchase2, price: 678 },
        { image: purchase3, price: 1098 },
        { image: purchase4, price: 789 },
        { image: purchase5, price: 890 },
      ],
    },
    books: {
      fiction: [
        { image: purchase6, price: 599 },
        { image: purchase7, price: 799 },
        { image: purchase8, price: 899 },
        { image: purchase9, price: 677 },
        { image: purchase10, price: 809 },
      ],
    },
  };

  const categoryData = products[category] || {};
  const productData = categoryData[subcategory.toLowerCase()] || [];

  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    localStorage.setItem('filters', JSON.stringify(filters));
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleBuyNow = (product) => {
    const productDetails = { ...product, filters };
    navigate('/buy-now', { state: productDetails }); // Navigate to Buy Now page
  };

  return (
    <div className="buy-product-page">
      <div className="sidebar">
        <h3>Filter Options</h3>
        <div className="filter-group">
          <label>Price Range</label>
          <input
            type="range"
            min="1000"
            max="100000"
            name="price"
            value={filters.price}
            onChange={handleFilterChange}
          />
          <p>Rs {filters.price}</p>
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
            <option value="Samsung Galaxy S21">Samsung Galaxy S21</option>
            <option value="OnePlus 9">OnePlus 9</option>
            <option value="Oppo F27">Oppo F27</option>
            <option value="Vivo YX200">Vivo YX200</option>
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
        <h2>{subcategory}</h2>

        <div className="product-list">
          {/* This is where you map over the products */}
          {productData.slice(0, 5).map((product) => (
            <div key={product.id || `${product.title}-${product.price}`} className="product-item">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3>{product.title}</h3>
              <p>Price: Rs {product.price}</p>
              <button onClick={() => handleBuyNow(product)}>Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyProductPage;
