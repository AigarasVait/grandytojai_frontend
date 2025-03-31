import React from "react";
import "./computerPartPage.css";
import { StoreCard } from "../generic/storeCard";
import { ComputerPartCardBig } from "./computerPartCardBig";

export const ComputerPartPage: React.FC = () => {
  return (
    <div className="computer-part-page">
      <ComputerPartCardBig />
      <StoreCard />
    </div>
  );
};
