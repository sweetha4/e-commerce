import React, { useState } from 'react';
import advertisementImage from '../assets/images/advertisement.jpg';
import permaLogo from '../assets/images/company.jpg';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
  };

  return (
    <div className='search-input'>
    <img src={permaLogo} alt='perma' className='company'></img>
    <form onSubmit={handleSearchSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search..." 
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
     <div className="ad">
     <img src={advertisementImage} alt="Advertise" className="ad-image" />
   </div>
   </div>
  );
};

export default SearchBar;
