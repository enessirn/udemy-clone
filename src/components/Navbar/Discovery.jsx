import React, { useState, useEffect } from "react";
import MenuData from "../../api/menuData.json";
function Discovery({ menuHover, setMenuHover }) {
  const [menuList, setMenuList] = useState([]);
  const [menuIndex, setMenuIndex] = useState(null);
  const [subMenuHover, setSubMenuHover] = useState(false)
  useEffect(() => {
    setMenuList(MenuData.navbar);
  }, []);
  return (
    <div
      style={{marginTop: "-8px"}}
      className={`discovery-all-list ${menuHover ? "" : "d-none"}`}
      onMouseLeave={() => setMenuHover(false)}
    >
      <div className="discovery-list">
        <ul className="discovery-list-content">
          <p className="discovery-header">Sertifikalara göz atın</p>
          {menuList.map((item, index) => (
            <div
              key={index}
              data-id={index}
              onMouseEnter={() => {
                setSubMenuHover(false)
                setMenuIndex(index)
              } }
            >
              <a href={item.href}>
                <li className={`discovery-list-item ${index === menuIndex ? "discovery-item-active" : ""}`}>
                  {item.title}
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
              </a>

              {index === 0 ? <hr style={{ marginTop: "6px" }} /> : null}
            </div>
          ))}
        </ul>
      </div>
      <div
        className={`discovery-list discovery-list-second ${
          menuIndex === null ? "d-none" : "d-flex"
        }`}
      >
        <ul className="discovery-list-content">
          {menuIndex !== null &&
            menuList[menuIndex]?.submenu.map((item, index) => (
              <div key={index} data-id={index} onMouseEnter={() => setSubMenuHover(true)}>
                <a href={item.href}>
                  <li className="discovery-list-item">
                    {item.title}
                    <i className="fa-solid fa-chevron-right"></i>
                  </li>
                </a>
              </div>
            ))}
        </ul>
      </div>
      <div className={`discovery-list discovery-list-second sub-menu ${subMenuHover ? "" : "d-none"}`}>
        <ul className="discovery-list-content">
          <li className="discovery-list-item">
            <a href="#cer">Lorem Ipsum</a>
            <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li className="discovery-list-item">
            <a href="#cer">Lorem Ipsum</a>
            <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li className="discovery-list-item">
            <a href="#cer">Lorem Ipsum</a>
            <i className="fa-solid fa-chevron-right"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Discovery;
