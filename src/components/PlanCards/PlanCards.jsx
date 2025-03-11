import React,{useEffect, useState} from "react";
import "./plancard.css";
function PlanCards({screenWidth}) {
const [isResponsive,setIsResponsive] = useState(false)

useEffect(() => {
  if (screenWidth < 1100) {
    setIsResponsive(true)
  }
  else {
    setIsResponsive(false)
  }
},[screenWidth])


  return (
    <div className="container py-4">
      <div className="row">
        <div className={`${isResponsive ? 'col-12' : 'col-4'}`}>
          <div
            className="plan-card-header"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`${isResponsive ? "#collapseExample1" : ""}`}
            aria-expanded="false"
            aria-controls="collapseExample1"
            id="bireysel"
          >
            <span className="d-flex flex-row justify-content-between">
              <h5>Kişisel Plan</h5>
              <i
                className={`fa-solid fa-chevron-down ${
                  isResponsive ? "" : "d-none"
                }`}
              ></i>
            </span>

            <small style={{ fontSize: "12px" }} className="text-muted">
              Sizin için
            </small>
            <span>
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              <small className="text-muted">Bireysel</small>
            </span>
          </div>
          <div className="plan-card-body">
            <div
              className={`collapse show ${isResponsive ? "" : "show"}`}
              id="collapseExample1"
            >
              <div className="card card-body" style={{ minHeight: "500px" }}>
                <h6>Ayda ₺165.00'den başlayan fiyatlarla</h6>
                <small className="text-muted">
                  Aylık veya yıllık ücretlendirme. İstediğinizde iptal edin.
                </small>
                <button className="plan-card-btn">
                  Ücretsiz Deneyin
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </button>

                <ul>
                  <li>12.000+ popüler kursa erişim</li>
                  <li>Sertifika hazırlığı</li>
                  <li>Hedef odaklı öneriler</li>
                  <li>Yapay zeka destekli kodlama alıştırmaları</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`${isResponsive ? 'col-12' : 'col-4'}`}>
          <div
            className="plan-card-header"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`${isResponsive ? "#collapseExample2" : ""}`}
            aria-expanded="false"
            aria-controls="collapseExample2"
          >
            <span className="d-flex flex-row justify-content-between">
              <h5>Team Planı</h5>
              <i
                className={`fa-solid fa-chevron-down ${
                  isResponsive ? "" : "d-none"
                }`}
              ></i>
            </span>
            <small style={{ fontSize: "12px" }} className="text-muted">
              Ekibiniz için
            </small>
            <span>
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              <small className="text-muted">2 - 20 kişi</small>
            </span>
          </div>
          <div className="plan-card-body ">
            <div
              className={`collapse ${isResponsive ? "" : "show"}`}
              id="collapseExample2"
            >
              <div className="card card-body" style={{ minHeight: "500px" }}>
                <h6>Kullanıcı başına ayda ₺1,039.00</h6>
                <small className="text-muted">
                  Yıllık faturalandırılır. İstediğinizde iptal edin.
                </small>
                <button className="plan-card-btn">
                  Ücretsiz Deneyin
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </button>

                <ul>
                  <li>12.000+ popüler kursa erişim</li>
                  <li>Sertifika hazırlığı</li>
                  <li>Hedef odaklı öneriler</li>
                  <li>Yapay zeka destekli kodlama alıştırmaları</li>
                  <li>Analizler ve benimseme raporları</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`${isResponsive ? 'col-12' : 'col-4'}`}>
          <div
            className="plan-card-header"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`${isResponsive ? "#collapseExample3" : ""}`}
            aria-expanded="false"
            aria-controls="collapseExample3"
          >
            <span className="d-flex flex-row justify-content-between">
              <h5>Enterprise Planı</h5>
              <i
                className={`fa-solid fa-chevron-down ${
                  isResponsive ? "" : "d-none"
                }`}
              ></i>
            </span>
            <small style={{ fontSize: "12px" }} className="text-muted">
              Kuruluşunuzun tamamı için
            </small>
            <span>
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              <small className="text-muted">20 kişiden fazla</small>
            </span>
          </div>
          <div className="plan-card-body">
            <div
              className={`collapse ${isResponsive ? "" : "show"}`}
              id="collapseExample3"
            >
              <div className="card card-body" style={{ minHeight: "500px" }}>
                <h6>Fiyatlandırma için satış ekibiyle iletişime geçin</h6>
                <small className="text-muted">
                  Aylık veya yıllık ücretlendirme. İstediğinizde iptal edin.
                </small>
                <button className="plan-card-btn">
                  Bir demo talep edin
                  <span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </button>

                <ul>
                  <li>Access to 27,000+ top courses</li>
                  <li>12.000+ popüler kursa erişim</li>
                  <li>Sertifika hazırlığı</li>
                  <li>Hedef odaklı öneriler</li>
                  <li>Yapay zeka destekli kodlama alıştırmaları</li>
                  <li>Gelişmiş analizler ve içgörüler</li>
                  <li>Özel müşteri başarısı ekibi</li>
                  <li>15 dilde uluslararası kurs koleksiyonu</li>
                  <li>Özelleştirilebilir içerikler</li>
                  <li>Eklenti ile uygulamalı teknik eğitim</li>
                  <li>Eklenti ile stratejik uygulama hizmetleri</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanCards;
