import React from "react";
import LessonCardList from "../../api/lessonCards.json";
import Card from "../Card/Card";

function LessonCards() {
  return (
    <div className="container my-5 ">
      <div className="d-flex justify-content-center gap-3">
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

      <button className="nav-btn btn-white mt-4">Tüm Veri Bilimi kurslarını göster</button>
    </div>
  );
}

export default LessonCards;
