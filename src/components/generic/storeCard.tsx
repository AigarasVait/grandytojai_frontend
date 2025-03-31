import React from "react";
import "./storeCard.css";
import { ComputerPart } from "../../models/ComputerPart";

type Props = {
  computerPart: ComputerPart;
};

export const StoreCard: React.FC<Props> = ({computerPart}) => {

  if (!computerPart) {
    return <p>No computer part found!</p>; // Handle if no data is passed
  }

  return (
    <a href={computerPart.storeUrl} target="_blank" className="store-card">
      <div className="store-name">{computerPart.storeName}</div>
      <div className="store-price">€{computerPart.price.toFixed(2)}</div>
      <button className="store-button">Go to store</button>
    </a>
  );
};