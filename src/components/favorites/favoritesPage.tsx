import React from "react";
import "./favoritesPage.css";
import { Outlet, useLocation } from 'react-router-dom';
import { FavoriteComputerPartList } from './favoriteComputerPartList';


export function FavoritesPage() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/favorites' ? (
        <FavoriteComputerPartList />
      ) : (
        <Outlet />
      )}
    </div>
  );
}