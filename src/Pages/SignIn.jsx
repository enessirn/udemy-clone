import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FooterUp from "../components/Footer/FooterUp";
import "./signin.css";
function SignIn({ isResponsive }) {
  return (
    <div>
      <Navbar isResponsive={isResponsive} />

      <div className="container sign-in-content">
        <div className="d-none d-md-block">
          <img
            src="https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x1.webp"
            alt=""
          />
        </div>
        <div>
          <div className="pt-5 sign-in-input-group">
            <h2 className="fw-bold text-center mt-5">
              Öğrenim yolculuğunuza <br /> devam etmek için oturum <br /> açın
            </h2>
            <label htmlFor="sign-in-input">E-posta</label>
            <input id="sign-in-input" type="email" className="sign-in-input" />
            <button className="sign-in-btn">
              <i className="fa-solid fa-envelope"></i> E-posta ile devam et
            </button>
          </div>

          <div id="diger-oturum-secenekleri">
            <small className="text-muted">Diğer oturum açma seçenekleri</small>

            <div className="login-options">
              <span>
                <i className="fa-brands fa-google"></i>
              </span>
              <span>
                <i className="fa-brands fa-facebook"></i>
              </span>
              <span>
                <i className="fa-brands fa-apple"></i>
              </span>
            </div>

            <div className="sign-in-bottom-links">
              <div>
                Hesabınız yok mu?{" "}
                <span className="purple-underline">Kaydol</span>
              </div>
              <div>
                <span className="purple-underline">
                  Kuruluşunuzla oturum açın
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterUp />
      <Footer isResponsive={isResponsive} />
    </div>
  );
}

export default SignIn;
