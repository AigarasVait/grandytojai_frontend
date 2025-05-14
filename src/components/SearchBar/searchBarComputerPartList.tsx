import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ComputerPart } from "../../models/ComputerPart";
import { getComputerPartsSearch } from "../../api/computerParts";
import { ComputerPartCard } from "../computer_part/computerPartCard";
import Pagination from '../generic/Pagination';
import Navbar from '../generic/navbar';

export const SearchResultsList: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const initialSearch = params.get("search") || "";
  const [searchValue, setSearchValue] = useState(initialSearch);
  const [computerParts, setComputerParts] = useState<ComputerPart[]>([]);
  const [error, setError] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(40);
  const [filter, setFilter] = useState("name ASC");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const parts = await getComputerPartsSearch<ComputerPart>(
          pageSize,
          currentPage,
          searchValue
        );
        setComputerParts(parts);
        setError("");
      } catch (err: any) {
        setError(err.message || "Nepavyko įkelti rezultatų.");
      }
    };

    fetchSearchResults();
  }, [pageSize, currentPage, searchValue, filter]);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

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
        category={undefined}
      />

      <div className="sort">
        <p>Rūšiavimas:</p>
        <select value={filter} onChange={handleFilterChange}>
          <option value={"name ASC"}>pagal abc</option>
          <option value={"price ASC"}>pigiausi viršuje</option>
          <option value={"price DESC"}>brangiausi viršuje</option>
        </select>
      </div>

      <div className="grid-container">
        {computerParts.length > 0 ? (
          computerParts.map((computerPart) => (
            <ComputerPartCard key={computerPart.barcode} computerPart={computerPart} />
          ))
        ) : (
          <p>Rezultatų nėra.</p>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        searchValue={searchValue}
        setCurrentPage={setCurrentPage}
        setPageSize={setPageSize}
        category={undefined}
      />
    </div>
  );
};