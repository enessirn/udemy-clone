import React from "react";

function Footer({isResponsive}) {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <div className="container-fluid footer ps-5">
      <div className="row border-bottom">
        <div className="col-md-3 mb-4">
          <h6>Hakkında</h6>
          <ul>
            <li>Hakkımızda</li>
            <li>Kariyer</li>
            <li>İletişim</li>
            <li>Blog</li>
            <li>Yatırımcılar</li>
          </ul>
        </div>
        <div className="col-md-3 col-12 mb-4">
          <h6>Udemy'yi keşfedin</h6>
          <ul>
            <li>Uygulamayı edinin</li>
            <li>Udemy'de Eğitim Verin</li>
            <li>Planlar ve Fiyatlandırmalar</li>
            <li>İş Ortaklığı</li>
            <li>Yardım ve Destek</li>
          </ul>
        </div>
        <div className="col-md-3 col-12 mb-4">
          <h6>Udemy for Business</h6>
          <ul>
            <li>Udemy Business</li>
          </ul>
        </div>
        <div className="col-md-3 col-12 mb-4">
          <h6>Yasal Konular ve Erişebilirlik</h6>
          <ul>
            <li>Erişebilirlik beyanı</li>
            <li>Gizlilik politikası</li>
            <li>Site haritası</li>
            <li>Koşullar</li>
          </ul>
        </div>
      </div>
      <div className={`footer-info d-flex ${isResponsive ? 'flex-column-reverse align-items-start gap-4' : 'flex-row'}`}>
        <div className="footer-udemy-logo">
          <img
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            alt="udemy logo"
          />
          <small>© {fullYear} Udemy, Inc.</small>
        </div>
        <div className=" cookie-settings">Çerez Ayarları</div>
        <div className="footer-lang">
          <i className="fa-solid fa-globe"></i>
          Türkçe
        </div>
      </div>
    </div>
  );
}

export default Footer;
