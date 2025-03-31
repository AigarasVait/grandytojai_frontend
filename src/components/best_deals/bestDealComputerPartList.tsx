import React, { useState, useEffect } from "react";
import { ComputerPart } from "../../models/ComputerPart";

import { getComputerParts, getComputerPartsDeals } from "../../api/computerParts";
import { ComputerPartCard } from "../computer_part/computerPartCard";
import "./bestDealComputerPartList.css";

export const BestDealsPageComputerPartList = () => {
  const [computerParts, setComputerParts] = useState<ComputerPart[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchComputerParts = async () => {
      try {
        const computerPartsResponse = await getComputerPartsDeals<ComputerPart>(
          40,
          1
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
        {computerParts.map((computerPart) => (
          <ComputerPartCard
            key={computerPart.barcode}
            computerPart={computerPart}
          />
        ))}
      </div>
    </div>
  );
};
