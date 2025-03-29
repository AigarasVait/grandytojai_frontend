import React, { useState } from "react";
import Logo from "../assets/logo.svg?react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  let timeoutId = null;

  const showDropdown = (index) => {
    clearTimeout(timeoutId);
    setOpenDropdown(index);
  };

  const hideDropdown = () => {
    timeoutId = setTimeout(() => {
      setOpenDropdown(null);
    });
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo-container">
          <Logo className="logo" />
        </div>
      </Link>

      <div className="separator"></div>

      {/* Kompiuterių komponentai */}
      <div
        className="dropdown"
        onMouseEnter={() => showDropdown(1)}
        onMouseLeave={hideDropdown}
      >
        <button className="dropdown-button">Kompiuterių komponentai</button>
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
        <button className="dropdown-button">Išorinės duomenų laikmenos</button>
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

      <div className="separator"></div>

      <Link to="/best-deals">
        <button className="deal-button">
          Geriausi pasiūlymai
        </button>
      </Link>

      
      
    </div>
    
  );
}

export default Navbar;
