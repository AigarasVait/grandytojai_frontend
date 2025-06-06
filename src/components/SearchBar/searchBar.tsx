import React, { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useLocation, useNavigate } from 'react-router-dom';
import "./searchBar.css";

interface SearchBarProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({ setSearchValue }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const searchParam = params.get('search') || '';

  const [inputValue, setInputValue] = useState(searchParam);

  // Update parent search value and URL (debounced)
  const debounced = useDebouncedCallback((value: string) => {
    const newParams = new URLSearchParams(location.search);
    if (value) {
      newParams.set('search', value);
    } else {
      newParams.delete('search');
    }

    navigate({ pathname: location.pathname, search: newParams.toString() }, { replace: true });
    setSearchValue(value);
  }, 500);

  useEffect(() => {
    setInputValue(searchParam);
  }, [searchParam]);

  return (
    <div className="search-wrapper">
      <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
      <input
        className="search-bar"
        placeholder="Ieškok geriausios kainos..."
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const value = inputValue.trim();
            const newParams = new URLSearchParams();
            if (value) {
              newParams.set('search', value);
              newParams.set('page', '1');
            }
            navigate(`/results?${newParams.toString()}`);
            setSearchValue(value);
          }
        }}
      />
    </div>
  );
};
