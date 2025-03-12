import React from "react";
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
import NowPopular from "../components/NowPopular/NowPopular";
import Footer from "../components/Footer/Footer";
import FooterUp from "../components/Footer/FooterUp";

function Home({screenWidth, isResponsive}) {
  return (
    <>
      <Navbar isResponsive={isResponsive} />
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

      <NowPopular isResponsive={isResponsive} />
      <FooterUp />
      <Footer isResponsive={isResponsive} />
    </>
  );
}

export default Home;
