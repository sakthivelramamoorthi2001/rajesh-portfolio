import { Document } from "react-pdf";
import ExamplePDF from "../assets/resume.pdf";
import React, { useEffect, useState } from "react";
import Resume from "../assets/resume.svg";
import "../css/resume.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const checkMobile = () => {
      let mobileMode = window.innerWidth <= 550;

      if (mobileMode) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="pdf-view">
      {isMobile ? (
        <div className="pdf-view-mobile">

          <div className="header_of_info">
            <i onClick={() => navigate("/")}>
              <svg
                width="43"
                height="42"
                className="back-icon"
                viewBox="0 0 43 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_928_579)">
                  <path
                    d="M14.199 19.2499H35.5V22.7499H14.199L23.586 32.1369L21.1115 34.6114L7.5 20.9999L21.1115 7.38843L23.586 9.86293L14.199 19.2499Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_928_579">
                    <rect
                      width="42"
                      height="42"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </i>

            <i onClick={() => navigate("/")}>
              <svg
                width="18"
                height="18"
                className="close-icon-pdf"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.01854 7.54336L15.6185 0.943359L17.5039 2.82869L10.9039 9.42869L17.5039 16.0287L15.6185 17.914L9.01854 11.314L2.41854 17.914L0.533203 16.0287L7.1332 9.42869L0.533203 2.82869L2.41854 0.943359L9.01854 7.54336Z"
                  fill="black"
                />
              </svg>
            </i>
          </div>
          <img src={Resume} />
        </div>
      ) : (
        <div className="pdf-view-web">
          <embed
            className="pdf-view-web-em"
            src={ExamplePDF}
            type="application/pdf"
          />
        </div>
      )}
    </div>
  );
}

export default App;
