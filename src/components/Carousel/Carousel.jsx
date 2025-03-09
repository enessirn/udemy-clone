import React from "react";
import Slide_1 from "../../wwwroot/img/slide_1.jpg";
import Slide_2 from "../../wwwroot/img/slide_2.jpg";
import "./carousel.css";
function Carousel() {
  return (
    <div
      id="carouselExample"
      className="carousel slide container-fluid p-0 container-md"
      data-bs-ride="carousel"
      style={{ minHeight: "300px" }}
    >
      <div className="carousel-inner" style={{ minHeight: "300px" }}>
        <div
          className="carousel-item position-relative"
          style={{ minHeight: "300px" }}
        >
          <img
            src={Slide_1}
            className="d-block w-100 slide-img "
            alt="Slide 1"
          />
          <div className="slide-info">
            <h3>Sizi başarıya ulaştıracak yetkinlikler</h3>
            <p>
              Teknoloji ve iş dünyası hızla değişirken siz de Udemy ile hız
              kazanın. Yeni yetkinlikler edinerek hedeflerinize ulaşın ve
              rekabette önde olun.
            </p>
            <div className="slide-buttons">
              <button className="slide-btn-default btn-purple">
                Bireysel plan
              </button>
              <button className="slide-btn-default btn-white">
                Kuruluşlar için plan
              </button>
            </div>
          </div>
        </div>
        <div
          className="carousel-item active position-relative"
          style={{ minHeight: "300px" }}
        >
          <img
            src={Slide_2}
            className="d-block w-100 slide-img"
            alt="Slide 2"
          />
          <div className="slide-info">
            <h3>Sizi anlayan öğrenim deneyimi</h3>
            <p>
              Bugününüz (ve geleceğiniz) için yetkinlikler. Hemen platformumuzda
              öğrenmeye başlayın.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev slide-btn slide-btn-left"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next slide-btn slide-btn-right"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
