import React from "react";
import { Popover } from "antd";
import "./card.css";
function Card({
  cardImg,
  cardTitle,
  cardOwner,
  cardRate,
  cardRateCount,
  cardPrice,
  cardTag,
}) {
  const content = (
    <div className="container" style={{ width: "20rem", height: "auto" }}>
      <h5>{cardTitle}</h5>
      <div className="d-flex flex-col gap-2 items-center">
        <a href="#" className={`card-tag ${cardTag == "" ? "d-none" : ""}`}>
          {cardTag}
        </a>
        <small className="text-success">
          Güncellendi <span className="fw-bold">Şubat 2025</span>
        </small>
      </div>
      <div>
        <small className="text-muted">
          Toplam 5,5 saat · Tüm Düzeyler · CC
        </small>
      </div>
      <ul className="list-course-detail">
        <li>
          A’dan Z’ye Yapay Zeka: ChatGPT, Midjourney, DALL-E, Google Gemini ,
          Bing AI, Notion ve Dahası ile 10X Yaratıcı Olun! Yapay Zeka
          Teknolojileri: Makine öğrenmesi, derin öğrenme ve büyük dil
          modellerini öğren
        </li>
        <li>
          Prompt Mühendisliği: En doğru sonuçları alabileceğin metinleri yazmayı
          öğren
        </li>
        <li>
          ChatGPT: Dünyanın en popüler yapay zeka aracını toplumun %99'undan
          daha iyi kullan
        </li>
      </ul>
      <button className="btn-purple w-100">Sepete Ekle</button>
    </div>
  );
  return (
    <Popover placement="right" content={content} title="">
      <div className="card  " style={{ width: "20rem" }}>
        <img src={cardImg} className="card-img-top" alt={cardTitle} />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text mb-1 text-muted">{cardOwner}</p>
          <div className="d-flex align-items-center mb-2">
            <span className="card-rate">{cardRate}</span>

            <div class="rate-stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <span className="card-rate-count text-muted">
              ({cardRateCount})
            </span>
          </div>

          <h5 className="card-price mb-3">{cardPrice}</h5>
          <a href="#" className={`card-tag ${cardTag == "" ? "d-none" : ""}`}>
            {cardTag}
          </a>
        </div>
      </div>
    </Popover>
  );
}

export default Card;

// <div className="container e">

// <div className="category-list overflow-hidden" ref={categoryList}>
// <button class="btn-category category-active rounded-pill shadow-sm">
//   <h6>ChatGPT</h6>
//   <p>4 milyondan fazla öğrenci</p>
// </button>
// <button class=" btn-category rounded-pill shadow-sm">
//   <h6> Veri Bilimi</h6>
//   <p>7 milyondan fazla öğrenci</p>
// </button>
// <button class="btn-category rounded-pill shadow-sm">
//   <h6> Python</h6>
//   <p>47,7 milyondan fazla öğrenci</p>
// </button>
// <button class="btn-category rounded-pill shadow-sm">
//   <h6> Makine Öğrenimi</h6>
//   <p>8 milyondan fazla öğrenci</p>
// </button>
// <button class="btn-category rounded-pill shadow-sm">
//   <h6>Derin Öğrenme</h6>
//   <p>2 milyondan fazla öğrenci</p>
// </button>
// <button class="btn-category rounded-pill shadow-sm">
//   <h6>Yapay Zeka (AI)</h6>
//   <p>4 milyondan fazla öğrenci</p>
// </button>
// <button class="btn-category rounded-pill shadow-sm">
//   <h6>İstatistik</h6>
//   <p>1 milyondan fazla öğrenci</p>
// </button>
// <button class="btn-category rounded-pill shadow-sm">
//   <h6>Doğal Dil İşleme (NLP)</h6>
//   <p>805.000+ fazla öğrenci</p>
// </button>
// </div>
// </div>