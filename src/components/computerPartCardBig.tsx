import React from "react";
import { useLocation } from "react-router-dom";
import "./computerPartCardBig.css";
import { ComputerPart } from "../models/ComputerPart";

export const ComputerPartCardBig: React.FC = () => {
  const location = useLocation();
  const computerPart: ComputerPart | undefined = location.state?.computerPart;

  if (!computerPart) {
    return <p>No computer part found!</p>; // Handle if no data is passed
  }

  return (
    <div className="computer-part-card big">
      <div className="image-placeholder">Image</div>
      <div className="computer-part-info">
        <h3 className="computer-part-name">{computerPart.partName}</h3>
        <p className="computer-part-price">Price: €{computerPart.price.toFixed(2)}</p>
        <p className="computer-part-barcode">{computerPart.barcode}</p>
      </div>
    </div>
  );
};
