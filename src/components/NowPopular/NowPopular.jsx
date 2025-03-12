import React from "react";
import "./nowpopular.css";
function NowPopular({ isResponsive }) {
  return (
    <div className="container-fluid p-5" style={{ backgroundColor: "#f6f7f9" }}>
      <div className="container">
        <h2 className="p-2 border-bottom fw-bold">Şimdi Popüler</h2>

        <div className="row mt-4">
          <div className="col-lg-4 col-12 mb-4">
            <h2 className="fw-bold">ChatGPT popüler bir yetkinlik</h2>
            <ul className="p-0 m-0 now-popular-list-content">
              <li className="d-flex flex-column">
                <span className="now-popular-list-item">
                  ChatGPT kurslarını görüntüleyin
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <small className="text-muted">4.241.653 learners</small>
              </li>
            </ul>
            {!isResponsive && (
              <button className="now-popular-btn">
                Tüm popüler yetkinlikleri göster
                <i class="fa-solid fa-arrow-trend-up"></i>
              </button>
            )}
          </div>
          <div className="col-lg-2 col-6 col-md-3  mb-5">
            <h4 className="fw-bold">Yazılım Geliştirme</h4>
            <ul className="p-0 m-0 now-popular-list-content">
              <li className="d-flex flex-column">
                <span className="now-popular-list-item">
                  Python <i className="fa-solid fa-chevron-right"></i>
                </span>
                <small className="text-muted">47.536.626 learners</small>
              </li>
              <li className="d-flex flex-column">
                <span className="now-popular-list-item">
                  Web Geliştirme <i className="fa-solid fa-chevron-right"></i>
                </span>
                <small className="text-muted">13.970.326 learners</small>
              </li>
              <li className="d-flex flex-column">
                <span className="now-popular-list-item">
                  Veri Bilimi<i className="fa-solid fa-chevron-right"></i>
                </span>
                <small className="text-muted">7.753.539 learners</small>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-6 col-md-3">
            <h4 className="fw-bold">Tasarım</h4>
            <ul className="p-0 m-0 now-popular-list-content">
              <li className="d-flex flex-column">
                <span className="now-popular-list-item">
                  Blender <i className="fa-solid fa-chevron-right"></i>
                </span>
                <small className="text-muted">2.894.918 learners</small>
              </li>
              <li className="d-flex flex-column">
                <span className="now-popular-list-item">
                  Grafik Tasarım <i className="fa-solid fa-chevron-right"></i>
                </span>
                <small className="text-muted">4.476.401 learners</small>
              </li>
              <li className="d-flex flex-column">
                <span className="now-popular-list-item">
                  Kullanıcı Deneyimi (UX) Tasarımı
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <small className="text-muted">2.060.501 learners</small>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-12 col-md-3">
            <h4 className="fw-bold">İşletme</h4>
            <ul className="p-0 m-0 now-popular-list-content">
              <li className="d-flex flex-column">
                <span className="now-popular-list-item">
                  PMI Project Management Professional (PMP)
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <small className="text-muted">2.537.732 learners</small>
              </li>
              <li className="d-flex flex-column">
                <span className="now-popular-list-item">
                  Microsoft Power BI
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <small className="text-muted">4.595.281 learners</small>
              </li>
              <li className="d-flex flex-column">
                <span className="now-popular-list-item">
                  Proje Yönetimi<i className="fa-solid fa-chevron-right"></i>
                </span>
                <small className="text-muted">3.939.875 learners</small>
              </li>
            </ul>
          </div>
          {isResponsive && (
              <button className="now-popular-btn w-100">
                Tüm popüler yetkinlikleri göster
                <i class="fa-solid fa-arrow-trend-up"></i>
              </button>
            )}
        </div>
      </div>
    </div>
  );
}

export default NowPopular;
