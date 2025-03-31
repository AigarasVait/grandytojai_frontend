import React, { useState, useEffect } from 'react';
import { ComputerPart } from '../models/ComputerPart';

import { getComputerParts } from "../api/computerParts";
import { ComputerPartCard } from './computerPartCard';
import "./computerPartList.css";

interface ComputerPartListProps {
  currentPage: number;
  pageSize: number;
}

export const ComputerPartList: React.FC<ComputerPartListProps> = ({ currentPage, pageSize }) => {
  const [computerParts, setComputerParts] = useState<ComputerPart[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchComputerParts = async () => {
        try {
            const computerPartsResponse = await getComputerParts<ComputerPart>(pageSize, currentPage);
            setComputerParts(computerPartsResponse)
        } catch (err: any) {
            setError(err.message)
        }
    }
    fetchComputerParts()
  }, [currentPage, pageSize]);

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
