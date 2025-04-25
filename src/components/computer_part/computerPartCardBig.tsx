import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./computerPartCardBig.css";
import { ComputerPart } from "../../models/ComputerPart";
import Star from "../../assets/star.svg?react";
import { getFavoriteBarcodes, saveFavoriteBarcodes } from "../../models/CookieUtils";

export const ComputerPartCardBig: React.FC = () => {
  const location = useLocation();
  const computerPart: ComputerPart | undefined = location.state?.computerPart;
  const [isFavorite, setIsFavorite] = useState(
      computerPart ? getFavoriteBarcodes().includes(computerPart.barcode) : false
  );

  if (!computerPart) {
    return <p>No computer part found!</p>; // Handle if no data is passed
  }

  const toggleFavorite = () => {
      const current = getFavoriteBarcodes();
      let updated;
      if (isFavorite) {
        updated = current.filter(b => b !== computerPart.barcode);
      } else {
        updated = [...current, computerPart.barcode];
      }
      saveFavoriteBarcodes(updated);
      setIsFavorite(!isFavorite);
  };

  return (
    <div className="computer-part-card big">
      <img
        src={computerPart.imageUrl}
        alt="Image"
        className="image-placeholder"
      ></img>
      <div className="computer-part-info">
        <h3 className="computer-part-name">{computerPart.partName}</h3>
        <p className="computer-part-price">€{computerPart.price.toFixed(2)}</p>
        <p className="computer-part-barcode">{computerPart.barcode}</p>
      </div>
      <button
        className={`favorite-button ${isFavorite ? "favorited" : ""}`}
        onClick={toggleFavorite}
      >
        <div className="star-container">
          <Star className="star" />
        </div>
      </button>
    </div>
  );
};
