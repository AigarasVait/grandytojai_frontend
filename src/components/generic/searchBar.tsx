import React, { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import "./Pagination.css";

interface SearchBarProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar: React.FC<SearchBarProps> = ({setSearchValue}) => {
    
    const debounced = useDebouncedCallback(
        (value) => {
            setSearchValue(value);
        },
        1000
      );

    return (
        <>
            <input defaultValue={''} onChange={e => debounced(e.target.value)} />
        </>
    );
  };