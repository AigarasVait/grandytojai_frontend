import React, { useState } from "react";
import Logo from "../../assets/logo.svg?react";
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
            <Link to="/category/gpu">Vaizdo plokštės (GPU)</Link>
            <Link to="/category/cpu">Procesoriai (CPU)</Link>
            <Link to="/category/motherboard">Pagrindinės plokštės ir priedai</Link>
          </div>
        )}
      </div>

      {/* Aušinimo sistemos ir maitinimas */}
      <div
        className="dropdown"
        onMouseEnter={() => showDropdown(2)}
        onMouseLeave={hideDropdown}
      >
        <button className="dropdown-button">Aušinimo sistemos ir maitinimas</button>
        {openDropdown === 2 && (
          <div className="dropdown-content">
            <Link to="/category/cooler">Aušintuvai</Link>
            <Link to="/category/psu">Maitinimo blokai (PSU)</Link>
          </div>
        )}
      </div>

      {/* Atmintis ir Laikmenos (RAM ir SSD) */}
      <div
        className="dropdown"
        onMouseEnter={() => showDropdown(3)}
        onMouseLeave={hideDropdown}
      >
        <button className="dropdown-button">
        Atmintis ir Laikmenos (RAM ir SSD)
        </button>
        {openDropdown === 3 && (
          <div className="dropdown-content">
            <Link to="/category/ram">Operatyvioji atmintis (RAM)</Link>
            <Link to="/category/ssd">SDD ir HDD</Link>
          </div>
        )}
      </div>

      {/* Korpusai ir priedai */}
      <div
        className="dropdown"
        onMouseEnter={() => showDropdown(3)}
        onMouseLeave={hideDropdown}
      >
        <button className="dropdown-button">
        Korpusai ir priedai
        </button>
        {openDropdown === 3 && (
          <div className="dropdown-content">
            <Link to="/category/case">Kompiuterių korpusai</Link>
            <Link to="/category/o">priedai</Link>
          </div>
        )}
      </div>

      <div className="separator"></div>

      <Link to="/best-deals">
        <button className="deal-button">
          Geriausi pasiūlymai
        </button>
      </Link>

      <div className="separator"></div>

      <Link to="/favorites">
        <button className="deal-button favorites">
          Mėgstamos prekės
        </button>
      </Link>
      
    </div>
    
  );
}

export default Navbar;
