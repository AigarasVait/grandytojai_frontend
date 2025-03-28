import React, { useEffect } from "react";
import "./computerPartCard.css";
import { ComputerPart } from "../models/ComputerPart";
import { NavLink } from "react-router-dom";

type Props = {
    computerPart: ComputerPart
}


export const ComputerPartCard: React.FC<Props> = ({ computerPart }) => {
  return (
    <NavLink to={`part/${computerPart.partName}`} className="computer-part-card" state={{ computerPart }}>
      <div className="image-placeholder">Image</div>
      <div className="computer-part-info">
        <h3 className="computer-part-name">{computerPart.partName}</h3>
        <p className="computer-part-price"> €{computerPart.price.toFixed(2)}</p>
        <p className="computer-part-barcode">{computerPart.barcode}</p>
      </div>
    </NavLink>
  );
};