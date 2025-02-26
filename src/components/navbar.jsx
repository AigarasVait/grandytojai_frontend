import React, { useState } from "react";
import "./navbar.css"; // Import styles (create this file if needed)

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="navbar">
      {/* Kompiuterių komponentai */}
      <div className="dropdown">
        <button onMouseEnter={() => toggleDropdown(1)} className="dropdown-button">
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
      <div className="dropdown">
        <button onMouseEnter={() => toggleDropdown(2)} className="dropdown-button">
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
      <div className="dropdown">
        <button onMouseEnter={() => toggleDropdown(3)} className="dropdown-button">
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