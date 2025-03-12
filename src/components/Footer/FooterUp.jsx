import React from "react";
import "./footer.css";
import footerList from "../../api/footerList.json";
function FooterUp() {
  return (
    <div className="container-fluid footer-up-container ">
      <h5 className="fw-bold ps-4 pb-4 ">
        En popüler yetkinlikleri ve sertifikasyonları keşfedin
      </h5>
      <div className="row d-none d-md-flex">
        {footerList.map((item, index) => (
          <div className="col-3 footer-up-list" key={index}>
            <h6 className="fw-bold ps-4">{item.title}</h6>
            <ul className="">
              {item.list.map((list, index) => (
                <li key={index}>{list}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="accordion d-block d-md-none" id="accordionExample">
        {footerList.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${index}`}
                aria-expanded="false"
                aria-controls={`collapse-${index}`}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading-${index}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  {item.list.map((listItem, id) => (
                    <li key={id}>{listItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterUp;
