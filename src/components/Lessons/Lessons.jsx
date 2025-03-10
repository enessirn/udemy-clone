import React from "react";
import LessonTabs from "./LessonTabs";
import "./lessons.css";
import LessonCategories from "./LessonCategories";
function Lessons() {
  return (
    <div className="container-fluid p-0 container-md mt-5 p-4 p-md-0">
      <h3>İhtiyacınız olan tüm yetkinlikler tek bir yerde</h3>
      <p className="text-muted">
        Kritik yetkinliklerden teknik konulara kadar çeşitli alanları kapsayan
        Udemy, profesyonel gelişiminizi destekler.
      </p>
      <LessonTabs />
      <LessonCategories />
    </div>
  );
}

export default Lessons;
