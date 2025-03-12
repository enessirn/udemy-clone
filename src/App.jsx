import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teach from "./Pages/Teach";
function App() {
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
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home isResponsive={isResponsive} screenWidth={screenWidth} />} />
          <Route exact path="/teach" element={<Teach isResponsive={isResponsive} screenWidth={screenWidth} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
