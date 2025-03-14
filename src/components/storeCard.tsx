import React from "react";
import { useLocation } from "react-router-dom";
import "./storeCard.css";
import { ComputerPart } from "../models/ComputerPart";

export const StoreCard: React.FC = () => {
  const location = useLocation();
  const computerPart: ComputerPart | undefined = location.state?.computerPart;

  if (!computerPart) {
    return <p>No computer part found!</p>; // Handle if no data is passed
  }

  return (
    <a className="store-card">
      <div className="store-name">Store Name</div>
      <div className="store-price">Price: €{computerPart.price.toFixed(2)}</div>
      <button className="store-button">Go to store</button>
    </a>
  );
};