import React, { useState } from "react";
import "./computerPartCard.css";
import { ComputerPart } from "../../models/ComputerPart";
import { NavLink } from "react-router-dom";
import Star from "../../assets/star.svg?react";
import { getFavoriteBarcodes, saveFavoriteBarcodes } from "../../models/CookieUtils";

type Props = {
  computerPart: ComputerPart;
};

export const ComputerPartCard: React.FC<Props> = ({ computerPart }) => {
  const [isFavorite, setIsFavorite] = useState(
    getFavoriteBarcodes().includes(computerPart.barcode)
  );

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
    <div className="computer-part-card">
      <NavLink
        to={`/part/${encodeURIComponent(computerPart.barcode)}`}
        className="card-link"
        state={{ computerPart }}
      >
        <img
          src={computerPart.imageUrl}
          alt="Image"
          className="image-placeholder"
        ></img>
        <div className="computer-part-info">
          <h3 className="computer-part-name">{computerPart.partName}</h3>
          <p className="computer-part-price"> €{computerPart.price.toFixed(2)}</p>
          <p className="computer-part-barcode">{computerPart.barcode}</p>
        </div>
      </NavLink>
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
