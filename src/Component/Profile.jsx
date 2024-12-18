import React from "react";
import "../css/profile.css";
import profileImage from "../assets/profile.png";
import ViewResume from "../assets/viewResume.svg";
import about from "../assets/about.png";
import { useNavigate } from "react-router-dom";
import MobileIcon from "../assets/mobile-app-icon.svg";
import asset from "../assets";

import { useEffect, useRef } from "react";
import { uniqueIdForProject } from "../Const";

const ScrollingAnimation = () => {
  // Duplicate items multiple times to cover more than 2x the screen width
  const repeatedItems = [...items, ...items];

  return (
    <div className="scroll-container">
      {/* <div className="scroll-content">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex content">
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5741 0.925781L11.9555 7.70451L17.371 3.39965L14.0719 9.4804L20.9875 9.66371L14.5517 12.2012L19.7315 16.7869L13.1703 14.5939L14.1907 21.4363L10.5741 15.5388L6.95754 21.4363L7.97791 14.5939L1.41666 16.7869L6.59651 12.2012L0.160645 9.66371L7.07627 9.4804L3.7772 3.39965L9.1927 7.70451L10.5741 0.925781Z"
                fill="#4864EC"
              />
            </svg>
            <span>{item}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

const Profile = () => {
  const navigator = useNavigate();
  return (
    <div className="portfolio-container ">
      <header className="portfolio-header">
        <section className="portfolio-header-content mobile-not-show">
          <h1 className="portfolio-name">
            Rajeshkanna <span>Jayabalan</span>
          </h1>
          <button className="view-resume-button flex">
            <span>View Resume </span>
            <img src={ViewResume} />
          </button>
        </section>

        <section className="profile-section">
          <img
            src={profileImage}
            alt="Rajeshkanna Jayabalan"
            className="profile-image"
          />

          <h2 className="portfolio-greeting">- Hello</h2>
          <h3 className="portfolio-title">
            <span className="highlighted-name">
              {" "}
              I’m Rajeshkanna Jayabalan,
            </span>
            <br />{" "}
            <span className="non-high-lighted-name">UX & UI Designer</span>
          </h3>
          <p className="portfolio-description">
            I take pride in mentoring early-career designers, building
            cross-functional <br />
            partnerships, and thriving in complex, dynamic environments.
          </p>

          <div className="web-not-show  mobile-show flex">
            <button className="view-resume-button flex ">
              <span>View Resume </span>
              <img src={ViewResume} />
            </button>
          </div>
        </section>
      </header>

      {/* Skills Section */}
      {/* <section className="skills-section scroll-container"> */}
      {/* <ul className="skills-list scroll-content">
          {items.map((item, index) => (
            <li className="scroll-item flex" key={index}>
              <img src={skillStar} />
              <span>{item}</span>
            </li>
          ))}

          {items.map((item, index) => (
            <li className="scroll-item flex" key={index+'1'}>
              <img src={skillStar} />
              <span>{item}</span>
            </li>
          ))}
        </ul> */}

      {/* </section> */}

      {/* Live Projects Section */}
      <section className="live-projects">
        <h2 className="live-projects-title">Live Projects</h2>
        <div className="project-cards ">
          {projects.map((project) => (
            <div
              className={project.CardClass + " " + "project-card  "}
              key={project.id}
              onClick={() => navigator("/project/" + project.uniqueId)}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                {/* <video  className="project-image" src="https://static.vecteezy.com/system/resources/previews/052/602/772/mp4/social-media-marketing-3d-animated-concept-video.mp4"></video> */}
                <div className={"project-badges"}>
                  <button className="badge-live">Live</button>
                  <button className={project.class + " " + "badge-category"}>
                    {project.category}
                  </button>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button
                  onClick={() => navigator("/project/" + project.uniqueId)}
                  className="view-case-button gap-4"
                >
                  View Case
                  <svg
                    width="16"
                    height="15"
                    viewBox="0 0 16 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.4218 0.662399L15.2594 7.49999L8.4218 14.3376L7.1786 13.0944L11.8939 8.37906L0.705133 8.37906L0.705133 6.62092H11.8939L7.1786 1.9056L8.4218 0.662399Z"
                      fill="#282B37"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="more-creations-section">
        <h2 className="creations-title">More Creations</h2>
        <div className="creations-grid ">
          {creations.map((creation) => (
            <div
              className="creation-card"
              key={creation.id}
              // onClick={() => navigator("/project/" + creation.uniqueId)}
            >
              <img
                src={creation.image}
                alt={creation.alt}
                className="creation-image"
              />
              <div className="flex-btwn">
                <h2 className="creation-title">{creation?.projectName}</h2>
                <svg
                  onClick={() => navigator("/project/" + creation.uniqueId)}
                  className="cursor-pointer"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.71797 0.23927L12.3025 5.82375L6.71797 11.4082L5.70261 10.3929L9.55376 6.54172L0.415516 6.54172L0.415516 5.10579H9.55376L5.70261 1.25463L6.71797 0.23927Z"
                    fill="#282B37"
                  />
                </svg>
              </div>
              <div className="app-icons flex-start-start flex-wrap">
                {creation.platforms?.map((i) => (
                  <>
                    <button className="app-icon flex-flex-start">
                      <img src={i.img} className="creation-app-icon-img" />
                      <span>{i.content}</span>
                    </button>
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="design-process">
        <h2 className="title">Design Process</h2>
        <div className="steps-container">
          {/* {steps.map((step, index) => (
            <div className="step" key={index}>
              <img className="step-icon" src={profileImage} />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))} */}
          {designProcess.map((i, index) => (
            <>
              <div className="content">
                <h2 className="id">{i.id}</h2>
                <h3 className="title">{i.title}</h3>
              </div>

              {index != designProcess.length - 1 && (
                <div className="content_arrow ">
                  <svg
                    className="mobile-not-show"
                    width="73"
                    height="7"
                    viewBox="0 0 73 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M72.7952 3.82374L67.7952 0.936985L67.7952 6.71049L72.7952 3.82374ZM0.590332 4.32373L3.59887 4.32373L3.59887 3.32373L0.590332 3.32373L0.590332 4.32373ZM9.61594 4.32373L15.633 4.32373L15.633 3.32373L9.61594 3.32373L9.61594 4.32373ZM21.6501 4.32373L27.6671 4.32373L27.6671 3.32373L21.6501 3.32373L21.6501 4.32373ZM33.6842 4.32373L39.7013 4.32373L39.7013 3.32373L33.6842 3.32373L33.6842 4.32373ZM45.7184 4.32373L51.7354 4.32373L51.7354 3.32373L45.7184 3.32373L45.7184 4.32373ZM57.7525 4.32374L63.7696 4.32374L63.7696 3.32374L57.7525 3.32374L57.7525 4.32374ZM72.7952 3.82374L67.7952 0.936985L67.7952 6.71049L72.7952 3.82374ZM0.590332 4.32373L3.59887 4.32373L3.59887 3.32373L0.590332 3.32373L0.590332 4.32373ZM9.61594 4.32373L15.633 4.32373L15.633 3.32373L9.61594 3.32373L9.61594 4.32373ZM21.6501 4.32373L27.6671 4.32373L27.6671 3.32373L21.6501 3.32373L21.6501 4.32373ZM33.6842 4.32373L39.7013 4.32373L39.7013 3.32373L33.6842 3.32373L33.6842 4.32373ZM45.7184 4.32373L51.7354 4.32373L51.7354 3.32373L45.7184 3.32373L45.7184 4.32373ZM57.7525 4.32374L63.7696 4.32374L63.7696 3.32374L57.7525 3.32374L57.7525 4.32374Z"
                      fill="#AFAFAF"
                    />
                  </svg>

                  <svg
                    className="web-not-show"
                    width="7"
                    height="31"
                    viewBox="0 0 7 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.43457 30.5375L6.32132 25.5375L0.547817 25.5375L3.43457 30.5375ZM2.93457 0.537476L2.93457 3.03748L3.93457 3.03748L3.93457 0.537476L2.93457 0.537476ZM2.93457 8.03748L2.93457 13.0375L3.93457 13.0375L3.93457 8.03748L2.93457 8.03748ZM2.93457 18.0375L2.93457 23.0375L3.93457 23.0375L3.93457 18.0375L2.93457 18.0375ZM3.43457 30.5375L6.32132 25.5375L0.547817 25.5375L3.43457 30.5375ZM2.93457 0.537476L2.93457 3.03748L3.93457 3.03748L3.93457 0.537476L2.93457 0.537476ZM2.93457 8.03748L2.93457 13.0375L3.93457 13.0375L3.93457 8.03748L2.93457 8.03748ZM2.93457 18.0375L2.93457 23.0375L3.93457 23.0375L3.93457 18.0375L2.93457 18.0375Z"
                      fill="#AFAFAF"
                    />
                  </svg>
                </div>
              )}
            </>
          ))}
        </div>
      </div>

      <div className="about">
        <div className="about_bio">
          <img src={about} className="" />
        </div>
        <div className="contact">
          <div className="border_line"></div>

          <div className="contact_info">
            <a>Check out my portfolio</a>
            <a>Check out Linkedin</a>
            <a>+91 88259 31607</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

const projects = [
  {
    id: 1,
    uniqueId: uniqueIdForProject.oneGolde,
    title: "OneGold",
    category: "Trading",
    description:
      "A ground-up mobile trading solution that brought in advanced trading features such as SIP management and Stop/Loss strategy.",
    image: asset.oneGolde.liveProjectImage,
    link: "#",
    class: "badge-category-type1",
    CardClass: "project-card-type1",
  },
  {
    id: 2,
    title: "APMEX",
    uniqueId: uniqueIdForProject.apmex,
    category: "E-Commerce",
    description:
      "A precious metal E-commerce platform with built-in dynamic price optimisation, improved funnel conversions, and higher customer retention.",
    image: asset.apmex.liveProjectImage,
    link: "#",
    class: "badge-category-type2",
    CardClass: "project-card-type2",
  },
  {
    id: 3,
    title: "Surgtest",
    uniqueId: uniqueIdForProject.surgtest,
    category: "E-Learning",
    description:
      "An Ed-tech learning platform for super speciality medical programs with comprehensive progress tracking, in-app live sessions and adaptive testing.",
    image: asset.surgtest.liveProjectImage,
    link: "#",
    CardClass: "project-card-type3",
    class: "badge-category-type3",
  },
  {
    id: 4,
    title: "YOLO Works",
    uniqueId: uniqueIdForProject.yoloWorks,
    category: "E-Learning",
    description:
      "A ground-up mobile trading solution that brought in advanced trading features such as SIP management and Stop/Loss strategy",
    image: asset.yoloWorks.liveProjectImage,
    link: "#",
    class: "badge-category-type3",
    CardClass: "project-card-type4",
  },
  {
    id: 5,
    title: "Vittae",
    uniqueId: uniqueIdForProject.vittae,
    category: "E-Learning",
    description:
      "A ground-up mobile trading solution that brought in advanced trading features such as SIP management and Stop/Loss strategy",
    image: asset.vitte.liveProjectImage,
    link: "#",
    CardClass: "project-card-type3",
    class: "badge-category-type5",
  },
  {
    id: 6,
    title: "LMES",
    uniqueId: uniqueIdForProject.limes,
    category: "E-Learning",
    description:
      "An Ed-tech learning platform for super speciality medical programs with comprehensive progress tracking, in-app live sessions and adaptive testing.",
    image: asset.limes.liveProjectImage,
    link: "#",
    class: "badge-category-type3",
    CardClass: "project-card-type6",
  },
];

const items = [
  "User Research",
  "Visual Design",
  "Prototyping",
  "Brand Strategy",
  "Interaction Design",
  "Wire Framing",
  "Design and Printing",
];

const creations = [
  {
    id: 1,
    image: asset.awetome.projectimage,
    uniqueId: uniqueIdForProject.awetome,
    alt: "Creation 1",
    projectName: "Awetome",
    platforms: [
      {
        content: "Mobile App",
        img: MobileIcon,
      },
      {
        content: "Web Design",
        img: MobileIcon,
      },
      {
        content: "Web Admin",
        img: MobileIcon,
      },
    ],
  },
  {
    id: 2,
    image: asset.vee2care.projectimage,
    alt: "Creation 2",
    uniqueId: uniqueIdForProject.vee2Care,
    projectName: "Vee 2 Care",
    platforms: [
      {
        content: "Mobile App",
        img: MobileIcon,
      },
      {
        content: "Web Design",
        img: MobileIcon,
      },
    ],
  },

  {
    id: 3,
    image: asset.erpOne.projectimage,
    alt: "Creation 3",
    uniqueId: uniqueIdForProject.erpOne,
    projectName: "ERP One",
    platforms: [
      {
        content: "Mobile App",
        img: MobileIcon,
      },
      {
        content: "Web Design",
        img: MobileIcon,
      },
    ],
  },
  {
    id: 4,
    image: asset.tnulm.projectimage,
    alt: "Creation 4",
    uniqueId: uniqueIdForProject.tnulm,
    projectName: "TNULM",
    platforms: [
      {
        content: "Mobile App",
        img: MobileIcon,
      },
      {
        content: "Web Design",
        img: MobileIcon,
      },
      {
        content: "Mobile App",
        img: MobileIcon,
      },
    ],
  },
  {
    id: 5,
    image: asset.hevanly.projectimage,
    alt: "Creation 5",
    projectName: "Heavenly",
    uniqueId: uniqueIdForProject.hevanly,
    platforms: [
      {
        content: "Mobile App",
        img: MobileIcon,
      },
      {
        content: "Web Design",
        img: MobileIcon,
      },
      {
        content: "Mobile App",
        img: MobileIcon,
      },
    ],
  },
  {
    id: 6,
    image: asset.getDiety.projectimage,
    alt: "Creation 6",
    uniqueId: uniqueIdForProject.getDiety,
    projectName: "Get Diety",
    platforms: [
      {
        content: "Mobile App",
        img: MobileIcon,
      },
      {
        content: "Web Design",
        img: MobileIcon,
      },
      {
        content: "Mobile App",
        img: MobileIcon,
      },
    ],
  },
  {
    id: 7,
    image: asset.bioDime.projectimage,
    alt: "Creation 7",
    uniqueId: uniqueIdForProject.bioDime,
    projectName: "Bio Dime",
    platforms: [
      {
        content: "Mobile App",
        img: MobileIcon,
      },
      {
        content: "Web Admin",
        img: MobileIcon,
      },
    ],
  },
];

const designProcess = [
  {
    id: "01",
    title: "Research",
    description: "Qitt, a pioneering Q&A platform developed by Algomerchant",
  },
  {
    id: "02",
    title: "User Flow",
    description: "Qitt, a pioneering Q&A platform developed by Algomerchant",
  },
  {
    id: "03",
    title: "Wireframes",
    description: "Qitt, a pioneering Q&A platform developed by Algomerchant",
  },
  {
    id: "04",
    title: "Visual Design",
    description: "Qitt, a pioneering Q&A platform developed by Algomerchant",
  },
  {
    id: "05",
    title: "Dev Hand off",
    description: "Qitt, a pioneering Q&A platform developed by Algomerchant",
  },
];
