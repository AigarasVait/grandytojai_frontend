import React from "react";
import "./bestDealsPage.css";
import { Outlet, useLocation } from 'react-router-dom';
import { BestDealsPageComputerPartList } from './bestDealComputerPartList';


export function BestDealsPage() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/best-deals' ? (
        <BestDealsPageComputerPartList />
      ) : (
        <Outlet />
      )}
    </div>
  );
}