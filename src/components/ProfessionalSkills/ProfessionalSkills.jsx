import React, { useState } from "react";
import "./skills.css";

function ProfessionalSkills() {
  const imgList = [
    "https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/8ac2b75db1a118f15e2fb5dfe2bb4567/desktop-hands-on-learning-2x.png",
    "https://cms-images.udemycdn.com/96883mtakkm8/GUVYFTj0uwEQuJha5j7TZ/133c991fb3b3f1f93a3e842f4baa7f44/desktop-certification-prep-2x.png",
    "https://cms-images.udemycdn.com/96883mtakkm8/6q4N9BvIQusFoheoALJhGj/678c1a0bb6c2a22d95461d409492231e/desktop-insights-and-analytics-2x.png",
    "https://cms-images.udemycdn.com/96883mtakkm8/385IhnON960Wvz50ooWIN3/d4e6738c97769258d387b3d609edaad4/desktop-customizable-2x.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f7f8fa" }}>
      <div className="container mt-5 skills-container">
        <h2>Hedeflerinize odaklı öğrenim</h2>
        <div className="row">
          <div className="col-6">
            {/* 1. Skill item */}
            <div
              className={`skill-list-item  mb-3 ${
                currentIndex === 0 ? "skill-active" : ""
              } `}
              data-index="0"
              onClick={() => setCurrentIndex(0)}
            >
              <div className="row">
                <div className="col-2 skill-icon">
                  <img
                    className="img-fluid"
                    src="https://cms-images.udemycdn.com/96883mtakkm8/7kN9RBFSMFNHzsGWsElMPi/dde73f8d1c47e046f035274e78410590/hands-on-practice.png"
                    alt="Skill 1 Icon"
                  />
                </div>
                <div className="col-10">
                  <div className="skill-item-header">
                    <h6>Uygulamalı Eğitim</h6>
                  </div>
                  <div className="skill-item-body">
                    Yapay zeka destekli kodlama alıştırmaları, pratik testleri,
                    sınavlar ve çalışma alanları ile yetkinliklerinizi etkili
                    bir şekilde geliştirin.
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Skill item */}
            <div
              className={`skill-list-item  mb-3 ${
                currentIndex === 1 ? "skill-active" : ""
              } `}
              data-index="1"
              onClick={() => setCurrentIndex(1)}
            >
              <div className="row">
                <div className="col-2 skill-icon">
                  <img
                    className="img-fluid"
                    src="https://cms-images.udemycdn.com/96883mtakkm8/2Xh9YHJustDwCEjn5IlO25/93e9b15c6e74876db0dec63466fcc5a0/certificate.png"
                    alt="Skill 2 Icon"
                  />
                </div>
                <div className="col-10">
                  <div className="skill-item-header">
                    <h6>Sertifika Hazırlığı</h6>
                  </div>
                  <div className="skill-item-body">
                    Gerçek dünyada karşılaşabileceğiniz sorunları çözerek ve bu
                    süreçte rozetler kazanarak sektörde tanınan sertifikalar
                    için hazırlanın.
                  </div>
                  <div className="skill-item-btn">
                    Explore Course
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Skill item */}
            <div
              className={`skill-list-item  mb-3 ${
                currentIndex === 2 ? "skill-active" : ""
              } `}
              data-index="2"
              onClick={() => setCurrentIndex(2)}
            >
              <div className="row">
                <div className="col-2 skill-icon">
                  <img
                    className="img-fluid"
                    src="https://cms-images.udemycdn.com/96883mtakkm8/6w8plrr7vY9rIY46UuX0q5/2f0a3f0c22e99bd2d430b998c81321f2/empty-state-1.png"
                    alt="Skill 3 Icon"
                  />
                </div>
                <div className="col-10">
                  <div className="skill-item-header">
                    <h6>İçgörüler ve analizler</h6>
                    <span className="enterprise-plan">Enterprise Plan</span>
                  </div>
                  <div className="skill-item-body">
                    Gelişmiş içgörüler ve verimli öğrenimi teşvik etmeye
                    yardımcı olan özel bir müşteri başarısı ekibi ile
                    hedeflerinize hızla ulaşın.
                  </div>
                  <div className="skill-item-btn">
                    Daha Fazla Bilgi Edinin
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Skill item */}
            <div
              className={`skill-list-item  mb-3 ${
                currentIndex === 3 ? "skill-active" : ""
              } `}
              data-index="3"
              onClick={() => setCurrentIndex(3)}
            >
              <div className="row">
                <div className="col-2 skill-icon">
                  <img
                    className="img-fluid"
                    src="https://cms-images.udemycdn.com/96883mtakkm8/2tKGBrb1N60wox2Lh8j3tz/7f1528c9f88ea47bd6ebb46f345902c3/organizations-2.png"
                    alt="Skill 4 Icon"
                  />
                </div>
                <div className="col-10">
                  <div className="skill-item-header">
                    <h6>Özelleştirilebilir içerikler</h6>
                    <span className="enterprise-plan">Enterprise Plan</span>
                  </div>
                  <div className="skill-item-body">
                    Ekip ve kuruluş hedefleri için özel öğrenim yolları
                    oluşturun ve hatta kendi içerik ve kaynaklarınızı sunun.
                  </div>
                  <div className="skill-item-btn">
                    Daha Fazla Bilgi Edinin
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sağdaki görsel */}
          <div className="col-6 skill-img">
            <img
              src={imgList[currentIndex]}
              alt="Skills Illustration"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalSkills;
