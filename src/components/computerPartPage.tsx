import React from "react";
import "./computerPartPage.css";
import { StoreCard } from "./storeCard";
import { ComputerPartCardBig } from "./computerPartCardBig";

export const ComputerPartPage: React.FC = () => {

  return (
    <div className="computer-part-page">
        <ComputerPartCardBig/>
        <StoreCard/>
    </div>
  );
};
