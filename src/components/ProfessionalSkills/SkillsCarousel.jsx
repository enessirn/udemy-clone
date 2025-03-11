import React from "react";

function SkillsCarousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/8ac2b75db1a118f15e2fb5dfe2bb4567/desktop-hands-on-learning-2x.png"
            className="d-block w-100"
            alt="Slide 1"
          />
          <div className="skill-item-header">
            <h6 className="ms-4 mt-2">Uygulamalı Eğitim</h6>
          </div>
          <div className="skill-item-body p-4">
            Yapay zeka destekli kodlama alıştırmaları, pratik testleri, sınavlar
            ve çalışma alanları ile yetkinliklerinizi etkili bir şekilde
            geliştirin.
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://cms-images.udemycdn.com/96883mtakkm8/GUVYFTj0uwEQuJha5j7TZ/133c991fb3b3f1f93a3e842f4baa7f44/desktop-certification-prep-2x.png"
            className="d-block w-100"
            alt="Slide2"
          />
          <div className="skill-item-header">
            <h6 className="ms-4 mt-2">Sertifika Hazırlığı</h6>
          </div>
          <div className="skill-item-body p-4">
            Gerçek dünyada karşılaşabileceğiniz sorunları çözerek ve bu süreçte
            rozetler kazanarak sektörde tanınan sertifikalar için hazırlanın.
          </div>
          <div className="skill-item-btn">
            Explore Course
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://cms-images.udemycdn.com/96883mtakkm8/6q4N9BvIQusFoheoALJhGj/678c1a0bb6c2a22d95461d409492231e/desktop-insights-and-analytics-2x.png"
            className="d-block w-100"
            alt="Slide3"
          />
          <div className="skill-item-header">
            <h6 className="ms-4 mt-2">İçgörüler ve analizler</h6>
            <span className="enterprise-plan">Enterprise Plan</span>
          </div>
          <div className="skill-item-body p-4">
            Gelişmiş içgörüler ve verimli öğrenimi teşvik etmeye yardımcı olan
            özel bir müşteri başarısı ekibi ile hedeflerinize hızla ulaşın.
          </div>
          <div className="skill-item-btn">
            Daha Fazla Bilgi Edinin
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://cms-images.udemycdn.com/96883mtakkm8/385IhnON960Wvz50ooWIN3/d4e6738c97769258d387b3d609edaad4/desktop-customizable-2x.png"
            className="d-block w-100"
            alt="Slide4"
          />
          <div className="skill-item-header">
            <h6 className="ms-4 mt-2">Özelleştirilebilir içerikler</h6>
            <span className="enterprise-plan">Enterprise Plan</span>
          </div>
          <div className="skill-item-body p-4">
            Ekip ve kuruluş hedefleri için özel öğrenim yolları oluşturun ve
            hatta kendi içerik ve kaynaklarınızı sunun.
          </div>
          <div className="skill-item-btn">
            Daha Fazla Bilgi Edinin
            <span>
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default SkillsCarousel;
