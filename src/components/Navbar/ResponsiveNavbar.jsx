import React from "react";
import { Link } from "react-router-dom";

function ResponsiveNavbar({ setMenuHover }) {
  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="position-relative bg-white">
          <button
            type="button"
            className="btn-close responsive-navbar-button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={() => setMenuHover(false)}
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="buttons">
            <Link to="sign-in">
              <button className="nav-btn w-100">Oturum aç</button>
            </Link>
            <button className="nav-btn w-100 text-center">Kaydol</button>
          </div>

          <div className="nav-list-responsive">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "12px",
                color: "#585b73",
                marginBottom: "-5px",
              }}
            >
              En Popüler
            </p>
            <ul>
              <li className="nav-btn responsive-nav-list-item">
                Web Geliştirme
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </li>
              <li className="nav-btn responsive-nav-list-item">
                Mobil Yazılım Geliştirme
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </li>
              <li className="nav-btn responsive-nav-list-item">
                Oyun Geliştirme
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </li>
              <li className="nav-btn responsive-nav-list-item">
                Girişmcilik
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </li>
              <li className="nav-btn responsive-nav-list-item">
                İş Analitiği ve Zekası
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </li>
              <li className="nav-btn responsive-nav-list-item">
                Finans
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </li>
              <li className="nav-btn responsive-nav-list-item">
                BT Sertifikaları
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </li>
              <li className="nav-btn responsive-nav-list-item">
                Kişisel Gelişim
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </li>
              <li className="nav-btn responsive-nav-list-item">
                Diğer Grafik Tasarım ve İllüstrasyon
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </li>
              <li className="nav-btn responsive-nav-list-item">
                Dijital Pazarlama
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </li>
              <li className="nav-btn responsive-nav-list-item">
                Tüm Kategoriler
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
              </li>
            </ul>
          </div>
          <div className="nav-list-responsive">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "13px",
                color: "#585b73",
                marginBottom: "-5px",
              }}
            >
              Udemy'nin sunduğu diğer <br /> hizmetler
            </p>
            <ul>
              <li className="nav-btn responsive-nav-list-item">
                Udemy Business
              </li>
              <li className="nav-btn responsive-nav-list-item">
                Uygulamayı Edinin
              </li>
              <li className="nav-btn responsive-nav-list-item">
                Arkadaşlarınızı davet edin
              </li>
              <li className="nav-btn responsive-nav-list-item">
                Yardım ve Destek
              </li>
            </ul>
            <div
              style={{
                cursor: "pointer",
                width: "50%",
                marginLeft: "20px",
                marginTop: "10px",
              }}
              className="nav-btn"
              id="sign-in-btn"
            >
              <span>
                <i
                  style={{ color: " #6b28d1", marginRight: "10px" }}
                  className="fa-solid fa-globe"
                ></i>
              </span>
              <span>Türkçe</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResponsiveNavbar;
