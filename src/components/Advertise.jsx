import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import phoneImage1 from '../assets/images/phone1.jpg';
import phoneImage2 from '../assets/images/phone2.jpg';
import phoneImage3 from '../assets/images/phone3.jpg';

const phoneAds = [
  {
    image: phoneImage1,
    title: 'iPhone 13 Pro',
    description: 'Latest features, best price!',
    price: 'Rs 49,990',
    id: 1,
  },
  {
    image: phoneImage2,
    title: 'Samsung Galaxy Flip',
    description: 'Special offer, limited time!',
    price: 'Rs 98,899',
    id: 2, 
  },
  {
    image: phoneImage3,
    title: 'Vivo yx200',
    description: 'Now with improved camera and battery!',
    price: 'Rs 20,999',
    id: 3, 
  },
];

const Advertisement = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="advertisement">
      <h2>Phone Deals & Offers</h2>
      <Slider {...settings}>
        {phoneAds.map((ad, index) => (
          <div key={index} className="phone-ad-slide">
            <img src={ad.image} alt={ad.title} className="phone-ad-image" />
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
            <p className="price">{ad.price}</p>
            <Link to={`/buy-phone/${ad.id}`} 
                state={{ 
                image: ad.image, 
                title: ad.title, 
                description: ad.description, 
                price: ad.price 
              }}>
            Buy Now</Link> 
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Advertisement;
