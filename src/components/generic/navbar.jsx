/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Logo from "../../assets/logo.svg?react";
import "./navbar.css";
import { SearchBar } from './searchBar';



import { Link } from "react-router-dom";

function Navbar({ setSearchValue }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  let timeoutId = null;

  const showDropdown = (index) => {
    clearTimeout(timeoutId);
    setOpenDropdown(index);
  };

  const hideDropdown = () => {
    timeoutId = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // Delay for transition effect
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/" onClick={() => setSearchValue("")}>
          <div className="logo-container">
            <Logo className="logo" />
          </div>
        </Link>

        <SearchBar setSearchValue={setSearchValue} />

        <div className="right-buttons">
          <Link to="/best-deals"  onClick={() => setSearchValue("")}>
            <button className="deal-button">
              Geriausi pasiūlymai
            </button>
          </Link>

          <Link to="/favorites" onClick={() => setSearchValue("")}>
            <button className="deal-button favorites">
              Mėgstamos prekės
            </button>
          </Link>
        </div>
      </div>

      <div className="bottom-navbar">
        {/* Dropdown 1 */}
        <div
          className="dropdown"
          onMouseEnter={() => showDropdown(1)}
          onMouseLeave={hideDropdown}
        >
          <button className="dropdown-button">Kompiuterių komponentai &#9660;</button>
          {openDropdown === 1 && (
            <div className="dropdown-content">
              <Link to="/category/gpu" onClick={() => setSearchValue("")}>Vaizdo plokštės (GPU)</Link>
              <Link to="/category/cpu" onClick={() => setSearchValue("")}>Procesoriai (CPU)</Link>
              <Link to="/category/motherboard" onClick={() => setSearchValue("")}>Pagrindinės plokštės ir priedai</Link>
            </div>
          )}
        </div>

        {/* Dropdown 2 */}
        <div
          className="dropdown"
          onMouseEnter={() => showDropdown(2)}
          onMouseLeave={hideDropdown}
        >
          <button className="dropdown-button">Aušinimo sistemos ir maitinimas &#9660;</button>
          {openDropdown === 2 && (
            <div className="dropdown-content">
              <Link to="/category/cooler" onClick={() => setSearchValue("")}>Aušintuvai</Link>
              <Link to="/category/psu" onClick={() => setSearchValue("")}>Maitinimo blokai (PSU)</Link>
            </div>
          )}
        </div>

        {/* Dropdown 3 */}
        <div
          className="dropdown"
          onMouseEnter={() => showDropdown(3)}
          onMouseLeave={hideDropdown}
        >
          <button className="dropdown-button">
            Atmintis ir Laikmenos (RAM ir SSD) &#9660;
          </button>
          {openDropdown === 3 && (
            <div className="dropdown-content">
              <Link to="/category/ram" onClick={() => setSearchValue("")}>Operatyvioji atmintis (RAM) </Link>
              <Link to="/category/ssd" onClick={() => setSearchValue("")}>SDD ir HDD</Link>
            </div>
          )}
        </div>

        {/* Dropdown 4 */}
        <div
          className="dropdown"
          onMouseEnter={() => showDropdown(4)}
          onMouseLeave={hideDropdown}
        >
          <button className="dropdown-button" onClick={() => setSearchValue("")}>Korpusai ir priedai &#9660;</button>
          {openDropdown === 4 && (
            <div className="dropdown-content lower">
              <Link to="/category/case">Kompiuterių korpusai</Link>
              <Link to="/category/o">Priedai</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
