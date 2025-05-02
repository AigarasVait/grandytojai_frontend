import React, { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import "./searchBar.css";

interface SearchBarProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setSearchValue }) => {

  const debounced = useDebouncedCallback(
    (value) => {
      setSearchValue(value);
    },
    1000
  );

  return (
    <div className="search-wrapper">
      <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
      <input
        className="search-bar"
        placeholder="Ieškok geriausios kainos..."
        defaultValue=""
        onChange={e => debounced(e.target.value)}
      />
    </div>


  );
};