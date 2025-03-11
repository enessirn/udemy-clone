import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import Lessons from "../components/Lessons/Lessons";
import Sponsor from "../components/Sponsor/Sponsor";
import LessonCards from "../components/Lessons/LessonCards";
import ProfessionalSkills from "../components/ProfessionalSkills/ProfessionalSkills";
import PlanCards from "../components/PlanCards/PlanCards";
import SkillsCarousel from "../components/ProfessionalSkills/SkillsCarousel";
import Achievements from "../components/Achievements/Achievements";
import TrendReport from "../components/TrendReport/TrendReport";

function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isResponsive, setIsResponsive] = useState(false);
  useEffect(() => {
    const setWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", setWidth);

    if (screenWidth < 800) {
      setIsResponsive(true);
    } else {
      setIsResponsive(false);
    }

    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, [window.innerWidth]);
  return (
    <>
      <Navbar />
      <Carousel />
      <Lessons />
      <Sponsor />
      <div className="container">
        <h2 style={{ marginBottom: "-16px", fontWeight: "bold" }}>
          Sizin için önerilenler
        </h2>
        <LessonCards />
      </div>
      <div className="container">
        <h2 style={{ marginBottom: "-16px", fontWeight: "bold" }}>
          Öğrenciler, bunları görüntülüyor
        </h2>
        <LessonCards />
      </div>
      {isResponsive ? <SkillsCarousel /> : <ProfessionalSkills />}
      <PlanCards screenWidth={screenWidth} />

      <Achievements />
      <TrendReport isResponsive={isResponsive} screenWidth={screenWidth} />
    </>
  );
}

export default Home;
