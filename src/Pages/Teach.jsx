import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FooterUp from "../components/Footer/FooterUp";

function Teach({isResponsive}) {
  return <div>

    <Navbar isResponsive={isResponsive} />
    <FooterUp />
    <Footer isResponsive={isResponsive}  />
    

  </div>;
}

export default Teach;
