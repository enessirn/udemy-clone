import React from 'react'
import Slide_2 from "../../wwwroot/img/slide_2.jpg"
import Slide_1 from "../../wwwroot/img/slide_1.jpg"
function Carousel() {
  return (
<div id="carouselExample" className="carousel slide container">
  <div className="carousel-inner">
    <div className="carousel-item active  position-relative">
      <img src={Slide_1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item position-relative">
      <img src={Slide_2} className="d-block w-100" alt="..." />

    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel
