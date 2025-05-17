import React, { useState, useEffect } from "react";
import { ComputerPart } from "../../models/ComputerPart";
import { getComputerPartsByType } from "../../api/computerParts";
import { ComputerPartCard } from "./computerPartCard";
import "./computerPartList.css";
import Pagination from "../generic/Pagination";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../generic/navbar";
import { ComputerPartList } from "./computerPartList";

interface ComputerPartListProps {
  currentPage?: number;
  pageSize?: number;
}

export const ComputerPartPageByCategory: React.FC<ComputerPartListProps> = () => {
  const [computerParts, setComputerParts] = useState<ComputerPart[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(40);
  const [filter, setFilter] = useState<string>('name ASC');

  const { category } = useParams();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const searchValueFromUrl = params.get("search") || "";
  const [searchValue, setSearchValue] = useState<string>(searchValueFromUrl);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
    window.location.reload(); // You might want to replace this with dynamic sorting logic instead of reload
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  useEffect(() => {
    const fetchComputerParts = async () => {
      try {
        const computerPartsResponse = await getComputerPartsByType<ComputerPart>(
          category!.toUpperCase(),
          pageSize,
          currentPage
          // Optionally: pass filter as an argument if backend supports it
        );
        setComputerParts(computerPartsResponse);
      } catch (err: any) {
        setError(err.message);
      }
    };

    setComputerParts([]);
    fetchComputerParts();
  }, [category, currentPage, pageSize, searchValue]);

  return (
    <div className="computer-part-list">
      {error && <p className="error-message">{error}</p>}
      <Navbar setSearchValue={setSearchValue} />

      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        searchValue={searchValue}
        setCurrentPage={setCurrentPage}
        setPageSize={setPageSize}
        category={category}
      />

      <div className="sort">
        <p>Rūšiavimas:</p>
        <select value={filter} onChange={handleFilterChange}>
          <option value={"name ASC"}>pagal abc</option>
          <option value={"price ASC"}>pigiausi viršuje</option>
          <option value={"price DESC"}>brangiausi viršuje</option>
        </select>
      </div>

      {searchValue && (
        <ComputerPartList
          currentPage={currentPage}
          pageSize={pageSize}
          searchValue={searchValue}
        />
      )}

      <div className="grid-container">
        {computerParts.length > 0 && !searchValue ? (
          computerParts.map((computerPart) => (
            <ComputerPartCard
              key={`${computerPart.barcode}${computerPart.storeName}`}
              computerPart={computerPart}
            />
          ))
        ) : (
          <p>No parts found for this category.</p>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        searchValue={searchValue}
        setCurrentPage={setCurrentPage}
        setPageSize={setPageSize}
        category={category}
      />
    </div>
  );
};