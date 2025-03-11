import React, { createRef, useState } from "react";
import LessonCardList from "../../api/lessonCards.json";
import Card from "../Card/Card";
import "../Card/card.css";

function LessonCards() {
  const cardList = createRef();
  const [scrollValue, setScrollValue] = useState(0);
  // Scroll
  const ScrollRight = () => {
    cardList.current.scrollLeft += 200;
    setScrollValue(scrollValue + 200);
  };
  const ScrollLeft = () => {
    cardList.current.scrollLeft -= 200;
    setScrollValue(scrollValue - 200);
  };
  return (
    <div className="container my-5 position-relative ">
      <div className="arrow-buttons">
        <button
          className={`arrow-btn arrow-left-btn shadow-sm ${
            scrollValue !== 0 ? "d-block" : "d-none"
          }`}
          onClick={ScrollLeft}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button
          className="arrow-btn arrow-right-btn shadow-sm"
          onClick={ScrollRight}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <div className="card-list" ref={cardList}>
        {LessonCardList.map((item, index) => (
          <Card
            key={index}
            cardImg={item.cardImg}
            cardTitle={item.cardTitle}
            cardOwner={item.cardOwner}
            cardRate={item.cardRate}
            cardRateCount={item.cardRateCount}
            cardPrice={item.cardPrice}
            cardTag={item.cardTag}
          />
        ))}
      </div>

      <button className="nav-btn btn-white mt-4">
        Tüm Veri Bilimi kurslarını göster
      </button>
    </div>
  );
}

export default LessonCards;
