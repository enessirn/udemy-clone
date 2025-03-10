import React from "react";
import "./card.css";
function Card({cardImg, cardTitle, cardOwner, cardRate, cardRateCount, cardPrice, cardTag}) {
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img
        src={cardImg}
        className="card-img-top"
        alt={cardTitle}
      />
      <div className="card-body">
        <h5 className="card-title">
         {cardTitle}
        </h5>
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
          <span className="card-rate-count text-muted">({cardRateCount})</span>
        </div>
        
        <h5 className="card-price mb-3">{cardPrice}</h5>
        <a href="#" className={`card-tag ${cardTag == '' ? 'd-none' : ''}`} >
            {cardTag}
        </a>
      </div>
    </div>
  );
}

export default Card;
