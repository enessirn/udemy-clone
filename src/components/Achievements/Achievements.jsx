import React from "react";
import "./achievements.css";
function Achievements() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f7f8fa" }}>
      <div className="achievements-content container">
        <div className="achievements-item shadow-sm ">
          <div className="quote">
            <i class="fa-solid fa-quote-left"></i>
          </div>

          <div>
            Udemy,{" "}
            <span className="text-purple">
              StackOverflow'un 2023 Geliştirici anketine
            </span>{" "}
            göre kodlama öğrenmek için{" "}
            <span className="text-bold">
              en popüler online kurs veya sertifika programı
            </span>{" "}
            olarak değerlendirildi.
          </div>

          <div className="profile">
            <img
              src="https://cms-images.udemycdn.com/96883mtakkm8/2PBcNgsQa3SvYWklkiN27r/5b8707cc79c8cae5774d5eb3b88b4001/logo_stackoverflow.svg"
              alt="Stack overlfow"
            />{" "}
            <br />
            <small className="text-muted">37.076 yanıt toplandı</small>
          </div>
          <a href="#" className="text-purple">
            Web Geliştirme kurslarını görüntüleyin
          </a>
        </div>
        <div className="achievements-item shadow-sm ">
          <div className="quote">
            <i class="fa-solid fa-quote-left"></i>
          </div>

          <div>
            Udemy gerçekten benim için
            <span className="text-bold">oyunun kurallarını değiştirdi</span> ve
            Dimensional'ı hayata geçirme sürecimizde harika bir yol gösterici
            oldu.
          </div>

          <div className="profile d-flex flex-row gap-1">
            <img
              src="https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg"
              alt="Stack overlfow"
            />
            <span className="d-flex flex-column">
              <small>Alvin Lim</small>
              <small className="text-muted">
                Dimensional'da Teknik Kurucu Ortak, CTO
              </small>
            </span>
          </div>
          <a href="#" className="text-purple">
            Bu iOS ve Swift kursunu görüntüleyin
          </a>
        </div>
        <div className="achievements-item shadow-sm ">
          <div className="quote">
            <i class="fa-solid fa-quote-left"></i>
          </div>

          <div>
            Udemy, kararlı bir şekilde hareket etmenizi sağlıyor. Tam da gerçek
            hayatta ihtiyacım olan bilgileri edindim. Bu bilgiler
            <span className="text-bold"> yeni bir rol</span> için yetkinliklerimi
            sergilememe yardımcı oldu.
          </div>

          <div className="profile d-flex flex-row gap-1">
            <img
              src="https://cms-images.udemycdn.com/96883mtakkm8/6dT7xusLHYoOUizXeVqgUk/4317f63fe25b2e07ad8c70cda641014b/William_A_Wachlin.jpeg"
              alt="Stack overlfow"
            />
            <span className="d-flex flex-column">
              <small>William A. Wachlin</small>
              <small className="text-muted">
                Amazon Web Services'da İş Ortağı Hesap Yöneticisi
              </small>
            </span>
          </div>
          <a href="#" className="text-purple">
            Bu AWS kursunu görüntüleyin
          </a>
        </div>
        <div className="achievements-item shadow-sm ">
          <div className="quote">
            <i class="fa-solid fa-quote-left"></i>
          </div>

          <div>
            Udemy Business, çalışanların teknolojiyi ve danışmanlık sosyal
            yetkinliklerini bir araya getirerek{" "}
            <span className="text-bold">kariyerlerinde ilerlemelerine</span>{" "}
            yardımcı oldu.
          </div>

          <div className="profile d-flex flex-row gap-1">
            <img
              src="https://cms-images.udemycdn.com/96883mtakkm8/4w9dYD4F64ibQwsaAB01Z4/c4610e9b1ac65589d8b1374ad10714e2/Ian_Stevens.png"
              alt="Stack overlfow"
            />
            <span className="d-flex flex-column">
              <small>Ian Stevens</small>
              <small className="text-muted">
              Head of Capability Development, North America at Publicis Sapient
              </small>
            </span>
          </div>
          <a href="#" className="text-purple">
            Tüm hikayeyi okuyun
          </a>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
