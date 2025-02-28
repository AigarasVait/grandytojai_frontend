import React, { useEffect } from "react";
import "./computerPartCard.css";
import { ComputerPart } from "../models/ComputerPart";

type Props = {
    computerPart: ComputerPart
}


export const ComputerPartCard: React.FC<Props> = ({computerPart}) => {


  return (
    <div className="computer-part-card">
      <div className="image-placeholder">Image</div>
      <div className="computer-part-info">
        <h3 className="computer-part-name">{computerPart.partName}</h3>
        <p className="computer-part-price">Price: €{computerPart.price.toFixed(2)}</p>
        <p className="computer-part-barcode">{computerPart.barcode}</p>
      </div>
    </div>
  );
};