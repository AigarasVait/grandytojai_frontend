import React, { useState, useEffect, useRef } from "react";
import { ComputerPart } from "../../models/ComputerPart";
import { getComputerPartsByType } from "../../api/computerParts";
import { ComputerPartCard } from "./computerPartCard";
import "./computerPartList.css";
import { ComputerPartList } from "./computerPartList";


interface ComputerPartListProps {
  currentPage?: number;
  pageSize?: number;
  category: string;
}

export const ComputerPartCategoryList: React.FC<ComputerPartListProps> = ({
  currentPage: initialPage = 1,
  pageSize: initialSize = 40,
  category
}) => {
  const [computerParts, setComputerParts] = useState<ComputerPart[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [pageSize, setPageSize] = useState(initialSize);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  useEffect(() => {
    const fetchComputerParts = async () => {
      try {
        const computerPartsResponse = await getComputerPartsByType<ComputerPart>(
          category.toUpperCase(),
          pageSize,
          currentPage
        );
        setComputerParts(computerPartsResponse);
      } catch (err: any) {
        setError(err.message);
      }
    };
    setComputerParts([]);
    fetchComputerParts();
  }, [category, currentPage, pageSize]);

  return (
    <div className="computer-part-list-home">
      {searchValue && <ComputerPartList currentPage={currentPage} pageSize={pageSize} searchValue={searchValue} />}

      <div className="grid-container-home ">
        {computerParts.length > 0 ? (
          computerParts.map((computerPart) => (
            <ComputerPartCard key={`${computerPart.barcode}${computerPart.storeName}`} computerPart={computerPart} />
          ))
        ) : (
          <p>No parts found for this category.</p>
        )}
      </div>
    </div>
  );
};
