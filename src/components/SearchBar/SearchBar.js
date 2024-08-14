// src/components/SearchBar/SearchBar.js

import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <select className="filter">
        <option>All fields</option>
        {/* Add more filter options if needed */}
      </select>
      <input
        type="text"
        placeholder="Quick search"
        className="search-input"
        value={query}
        onChange={handleInputChange}
      />
      <button className="btn" onClick={handleSearchClick}>Search</button>
      {/* Other buttons remain unchanged */}
    </div>
  );
};

export default SearchBar;
