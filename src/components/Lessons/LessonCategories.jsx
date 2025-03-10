import React, { createRef,useState } from "react";

function LessonCategories() {
  const categoryList = createRef();
  const [scrollValue, setScrollValue] = useState(0)
  // Scroll
  const ScrollRight = () => {
    categoryList.current.scrollLeft += 200;
    setScrollValue(scrollValue + 200)
    console.log(categoryList.current.scrollLeft)
  };
  const ScrollLeft = () => {
    categoryList.current.scrollLeft -= 200;
    setScrollValue(scrollValue - 200)
  };

  return (
    <div className="container mt-5 position-relative">
      <div className="arrow-buttons">
        <button className={`arrow-btn arrow-left-btn shadow-sm ${scrollValue !== 0 ? 'd-block' : 'd-none'}`} onClick={ScrollLeft}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button
          className="arrow-btn arrow-right-btn shadow-sm"
          onClick={ScrollRight}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
      <div className="category-list overflow-hidden" ref={categoryList}>
        <button class="btn-category category-active rounded-pill shadow-sm">
          <h6>ChatGPT</h6>
          <p>4 milyondan fazla öğrenci</p>
        </button>
        <button class=" btn-category rounded-pill shadow-sm">
          <h6> Veri Bilimi</h6>
          <p>7 milyondan fazla öğrenci</p>
        </button>
        <button class="btn-category rounded-pill shadow-sm">
          <h6> Python</h6>
          <p>47,7 milyondan fazla öğrenci</p>
        </button>
        <button class="btn-category rounded-pill shadow-sm">
          <h6> Makine Öğrenimi</h6>
          <p>8 milyondan fazla öğrenci</p>
        </button>
        <button class="btn-category rounded-pill shadow-sm">
          <h6>Derin Öğrenme</h6>
          <p>2 milyondan fazla öğrenci</p>
        </button>
        <button class="btn-category rounded-pill shadow-sm">
          <h6>Yapay Zeka (AI)</h6>
          <p>4 milyondan fazla öğrenci</p>
        </button>
        <button class="btn-category rounded-pill shadow-sm">
          <h6>İstatistik</h6>
          <p>1 milyondan fazla öğrenci</p>
        </button>
        <button class="btn-category rounded-pill shadow-sm">
          <h6>Doğal Dil İşleme (NLP)</h6>
          <p>805.000+ fazla öğrenci</p>
        </button>
      </div>
    </div>
  );
}

export default LessonCategories;
