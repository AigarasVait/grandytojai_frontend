import { useState, useEffect } from "react";
import { ComputerPart } from "../../models/ComputerPart";
import { getCheapestComputerPartsByBarcode } from "../../api/computerParts";
import { ComputerPartCard } from "../computer_part/computerPartCard";
import "./favoriteComputerPartList.css";
import { getFavoriteBarcodes } from "../../models/CookieUtils";

export const FavoriteComputerPartList = () => {
  const [computerParts, setComputerParts] = useState<ComputerPart[]>([]);
  const [error, setError] = useState<string>("");
  const favoriteBarcodes = getFavoriteBarcodes();

  useEffect(() => {
    const fetchComputerParts = async () => {
      try {
        const computerPartsResponse = await getCheapestComputerPartsByBarcode<ComputerPart>(
          favoriteBarcodes.join("\',\'"),
        );
        setComputerParts(computerPartsResponse);
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchComputerParts();
  }, []);

  return (
    <div className="computer-part-list">
      {error && <p className="error-message">{error}</p>}
      <div className="grid-container">
        {computerParts.length > 0 ? (
          computerParts.map((computerPart) => (
            <ComputerPartCard key={computerPart.barcode} computerPart={computerPart} />
          ))
        ) : (
          <p>Neturite jokių mėgstamų prekių.</p>
        )}
      </div>
    </div>
  );
};
