import React, { useState } from "react";
import "./navbar.css";
import Discovery from "./Discovery";
function Navbar() {
  const [menuHover, setMenuHover] = useState(false);
  return (
    <nav className="container-fluid position-relative px-0 px-md-4 py-md-2">
      <button className="d-block d-md-none nav-btn">
      <i style={{fontSize: "16px", fontWeight: "bold"}} className="fa-solid fa-bars menu-icon"></i>
      </button>

      <div className="logo">
        <img
          style={{width: "90px"}}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png"
          alt="Udemy"
        />
      </div>

      <button
        className="discovery-btn nav-btn d-none d-md-block"
        onMouseEnter={() => setMenuHover(true)}
      >
        Keşfedin
      </button>

      <div className="search-input d-none d-md-block">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          id="header-search"
          placeholder="Dilediğiniz şeyi arayın"
        />
      </div>

      <div className="menu-right-side">
        <a
          className="nav-btn d-none d-xl-flex menu-link"
          href="#udemy-business"
        >
          Udemy Business
        </a>
        <a className="nav-btn d-none d-lg-flex" href="#udemy-business">
          Udemy'de Eğitim Verin
        </a>

        <button className="nav-btn cart-btn d-none d-md-block">
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
        <button className="nav-btn d-none d-md-block" id="sign-in-btn">
          Oturum aç
        </button>
        <button className="nav-btn d-none d-md-block" id="sign-up-btn">
          Kaydol
        </button>

        <button className="nav-btn lang-btn d-none d-md-block">
          <i className="fa-solid fa-globe"></i>
        </button>
      </div>
      <div className="d-none d-md-block">
        <Discovery menuHover={menuHover} setMenuHover={setMenuHover} />
      </div>

      {/* Resposive Buttons */}
      <div className="d-flex d-md-none justify-content-center align-middle">
        <button className="nav-btn">
          <i style={{fontSize: "14px", marginTop: "2px"}} className="fa-solid fa-magnifying-glass "></i>
        </button>

        <button className="nav-btn cart-btn">
          <i style={{fontSize: "14px"}} className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
