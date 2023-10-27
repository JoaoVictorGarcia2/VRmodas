import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => { 
    const [query, setQuery] = useState('');
  
    const handleChange = (e) => {
      setQuery(e.target.value);
      onSearch(e.target.value);
    };
  
    return (
      <input className='buscainput' type="text"
        placeholder="Choose..."
        value={query}
        onChange={handleChange}
      />
    );
  };
  
  export default SearchBar;
  