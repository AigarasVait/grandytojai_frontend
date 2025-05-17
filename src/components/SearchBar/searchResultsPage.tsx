import React from "react";
import { Outlet, useLocation } from 'react-router-dom';
import { SearchResultsList } from './searchBarComputerPartList';


export function SearchResults() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/results' ? (
        <SearchResultsList />
      ) : (
        <Outlet />
      )}
    </div>
  );

};