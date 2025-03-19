import React, { useState } from "react";
import logo from "../assets/logo.svg"; // Import image
import "./navbar.css"; // Import styles (create this file if needed)
import { API_BEST_DEAL_ENDPOINT } from '../constants/api';

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  let timeoutId = null; // To delay hiding dropdown

  const showDropdown = (index) => {
    clearTimeout(timeoutId); // Prevent closing
    setOpenDropdown(index);
  };

  const hideDropdown = () => {
    timeoutId = setTimeout(() => {
      setOpenDropdown(null);
    }, ); // Small delay to prevent flickering
  };

  return (
    <div className="navbar">
      
      <a href="http://localhost:5173/">
        <img src={logo} className="logo" />
      </a>
      
      

      {/* Kompiuterių komponentai */}
      <div
        className="dropdown"
        onMouseEnter={() => showDropdown(1)}
        onMouseLeave={hideDropdown}
      >
        <button className="dropdown-button">
          Kompiuterių komponentai
        </button>
        {openDropdown === 1 && (
          <div className="dropdown-content">
            <a href="#">Kompiuterių platformos (Barebone)</a>
            <a href="#">Procesoriai (CPU)</a>
            <a href="#">Pagrindinės plokštės ir priedai</a>
            <a href="#">Aušintuvai</a>
          </div>
        )}
      </div>

      {/* Išorinės duomenų laikmenos */}
      <div
        className="dropdown"
        onMouseEnter={() => showDropdown(2)}
        onMouseLeave={hideDropdown}
      >
        <button className="dropdown-button">
          Išorinės duomenų laikmenos
        </button>
        {openDropdown === 2 && (
          <div className="dropdown-content">
            <a href="#">Diskų korpusai (HDD cases)</a>
            <a href="#">Išoriniai diskai</a>
            <a href="#">Tinklo saugyklos, NAS</a>
          </div>
        )}
      </div>

      {/* Kompiuterių priedai ir aksesuarai */}
      <div
        className="dropdown"
        onMouseEnter={() => showDropdown(3)}
        onMouseLeave={hideDropdown}
      >
        <button className="dropdown-button">
          Kompiuterių priedai ir aksesuarai
        </button>
        {openDropdown === 3 && (
          <div className="dropdown-content">
            <a href="#">Akiniai darbui kompiuteriu</a>
            <a href="#">Apsauga nuo vagysčių (užraktai, troseliai)</a>
            <a href="#">USB HUB, šakotuvai</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
