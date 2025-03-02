import React, { useState, useEffect } from 'react';
import { ComputerPart } from '../models/ComputerPart';

import { getComputerParts } from "../api/computerParts";
import { ComputerPartCard } from './computerPartCard';
import "./computerPartList.css";

export const ComputerPartList = () => {
  const [computerParts, setComputerParts] = useState<ComputerPart[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchComputerParts = async () => {
        try {
            const computerPartsResponse = await getComputerParts<ComputerPart>();
            setComputerParts(computerPartsResponse)
        } catch (err: any) {
            setError(err.message)
        }
    }
    fetchComputerParts()
  }, []);

  return (
    <div className="computer-part-list">
      {error && <p className="error-message">{error}</p>}
      <div className="grid-container">
        {computerParts.map((computerPart) => (
          <ComputerPartCard key={computerPart.barcode} computerPart={computerPart} />
        ))}
      </div>
    </div>
  );
};
