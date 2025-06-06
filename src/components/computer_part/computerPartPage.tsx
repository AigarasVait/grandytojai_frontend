import React, { useState, useEffect }  from "react";
import { useLocation } from "react-router-dom";
import "./computerPartPage.css";
import { StoreCard } from "../generic/storeCard";
import { ComputerPartCardBig } from "./computerPartCardBig";
import { getComputerPartsByBarcode } from "../../api/computerParts";
import { ComputerPart } from "../../models/ComputerPart";

export const ComputerPartPage: React.FC = () => {
  const [computerPartStores, setComputerPartStores] = useState<ComputerPart[]>([])
  const [error, setError] = useState<string>('');

  const location = useLocation();
  const computerPart: ComputerPart = location.state.computerPart;

  useEffect(() => {
      const fetchComputerPartStores = async () => {
          try {
              const computerPartsResponse = await getComputerPartsByBarcode<ComputerPart>(encodeURIComponent(computerPart.barcode));
              setComputerPartStores(computerPartsResponse)
          } catch (err: any) {
              setError(err.message)
          }
      }
      fetchComputerPartStores()
    }, []);
  

  return (
    <div className="computer-part-page">
      <ComputerPartCardBig />
      {
          <StoreCard key={`${computerPart.barcode}${computerPart.storeName}`} computerParts={computerPartStores} />
      }
    </div>
  );
};
