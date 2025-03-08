import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <nav className="">
      <div className="logo">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png"
          alt="Udemy"
        />
      </div>
      <button className="discovery-btn nav-btn">Keşfedin</button>
      <div className="search-input">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" name="" id="header-search" placeholder="Dilediğiniz şeyi arayın" />
      </div>

      <div className="menu-right-side">
        <a className="nav-btn d-none d-xl-flex menu-link" href="#udemy-business">Udemy Business</a>
        <a className="nav-btn d-none d-lg-flex" href="#udemy-business">Udemy'de Eğitim Verin</a>

        <button className="nav-btn cart-btn">
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
        <button className="nav-btn" id="sign-in-btn">Oturum aç</button>
        <button className="nav-btn" id="sign-up-btn">Kaydol</button>

        <button className="nav-btn lang-btn">
          <i class="fa-solid fa-globe"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
