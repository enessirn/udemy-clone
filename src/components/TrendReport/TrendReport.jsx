import React from "react";
import "./trendreport.css";
function TrendReport({ isResponsive, screenWidth }) {
  return (
    <div className="container">
      <div className="row">
      <div className={`col-md-9 col-12 ${isResponsive ? "" : "d-none"}`}>
          <img
            src="https://cms-images.udemycdn.com/96883mtakkm8/1qvvR0FDKv9chruIpia6Sc/b2af22a0097e47de4e4354237e3f378c/Onsite_Desktop_GLSTR25.png"
            className={`img-fluid `}
            alt="Trend Report"
          />
        </div>
        <div className="col-md-3 col-12">
          <h2 style={{ marginTop: "110px" }} className="fw-bold">
            İş dünyasının geleceği için en popüler trendler
          </h2>
          <p className="mt-4">
            Üretken yapay zeka ve liderlik, günümüzün yetkinlik tabanlı
            ekonomisinin merkezinde yer alıyor. Daha fazla bilgi edinmek için
            2024 Küresel Öğrenim ve Yetkinlik Trendleri Raporunu edinin.
          </p>
        </div>
        <div className={`col-md-9 col-12 ${isResponsive ? "d-none" : ""}`}>
          <img
            src="https://cms-images.udemycdn.com/96883mtakkm8/1qvvR0FDKv9chruIpia6Sc/b2af22a0097e47de4e4354237e3f378c/Onsite_Desktop_GLSTR25.png"
            className={`img-fluid `}
            alt="Trend Report"
          />
        </div>
        <button className={`get-report ${screenWidth < 1400 ? '' : 'btn-fixed'}`}>
          Raporu edinin<i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default TrendReport;
