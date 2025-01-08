import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import productImage1 from '../assets/images/product1.jpg';
import productImage2 from '../assets/images/product2.jpg';
import productImage3 from '../assets/images/product3.jpg';
import productImage4 from '../assets/images/product4.jpg';
import productImage5 from '../assets/images/product5.jpg';
import productImage6 from '../assets/images/product6.jpg';
import productImage7 from '../assets/images/product7.jpg';
import productImage8 from '../assets/images/product8.jpg';
import { Link } from 'react-router-dom';

const topSellingProducts = [
  { id: 1, image: productImage1 },
  { id: 2, image: productImage2 },
  { id: 3, image: productImage3 },
  { id: 4, image: productImage4 },
  { id: 5, image: productImage5 },
  { id: 6, image: productImage6 },
  { id: 7, image: productImage7 },
  { id: 8, image: productImage8 },
];

const SellingAd = () => {
  const settings = {
    infinite: true, 
    speed: 500, 
    slidesToShow: 4, 
    slidesToScroll: 4,
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="selling-ad">
      <h2 className='sell'>Top Selling Products</h2>
      <Slider {...settings}>
        {topSellingProducts.map((product, index) => (
          <div key={index} className="product-slide">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <Link to={`/buy-phone/${product.id}`}  
                state={{ 
                image: product.image, 
                title: product.title, 
                price: product.price 
              }}>
              <button className='sellAd'>Buy Now</button>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SellingAd;
