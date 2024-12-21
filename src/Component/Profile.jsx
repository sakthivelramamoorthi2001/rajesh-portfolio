import React, { useState } from "react";
import "../css/profile.css";
import profileImage from "../assets/profile.png";
import ViewResume from "../assets/viewResume.svg";
import about from "../assets/about.png";
import { useNavigate } from "react-router-dom";
import { MobileIcon, DesktopIcon } from "../assets/Svg";
import asset from "../assets";
import video from "../assets/vitte/projectVideo.mp4";
import { useEffect, useRef } from "react";
import { uniqueIdForProject } from "../Const";
import Video from "./Video";

const ScrollingAnimation = () => {
  // Duplicate items multiple times to cover more than 2x the screen width
  // const repeatedItems = [...items, ...items];

  return (
    <div className="scroll-container">
      {/* <div className="scroll-content">
       
      </div> */}
    </div>
  );
};

const itemsa = [
  "User Research",
  "Visual Design",
  "Prototyping",
  "Brand Strategy",
  "Interaction Design",
  "Wire Framing",
  "Design and Printing",
  "User Research",
  "Visual Design",
  "Prototyping",
  "Brand Strategy",
  "Interaction Design",
  "Wire Framing",
  "Design and Printing",
];

const videResume = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf"; // Specify the PDF URL
  document.body.appendChild(link); // Append the link to the document
  link.click(); // Simulate a click event
  document.body.removeChild(link);
};

const MovingWords = () => {
  return (
    <div className="container">
      <div className="moving-text">
        {itemsa.concat(itemsa).map((word, index) => (
          <span key={index} className="word">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

const Profile = () => {
  const navigator = useNavigate();
  const [selectedImage, setSelectedImage] = useState("");
  return (
    <>
      {selectedImage && (
        <div className="preview">
          <div className="fullScreenImagePopup">
            <div className="preview-image">
              <i className="close-icon" onClick={() => setSelectedImage("")}>
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 14.1146L23.1 7.51465L24.9853 9.39998L18.3853 16L24.9853 22.6L23.1 24.4853L16.5 17.8853L9.89998 24.4853L8.01465 22.6L14.6146 16L8.01465 9.39998L9.89998 7.51465L16.5 14.1146Z"
                    fill="white"
                  />
                </svg>
              </i>

              <img src={selectedImage} alt="" className="preview-image" />
            </div>{" "}
          </div>
        </div>
      )}

      <div
        className={`portfolio-container  ${
          selectedImage && "portfolio-container-hide"
        }`}
      >
        <header className="portfolio-header">
          <section className="portfolio-header-content mobile-not-show web-not-show">
            <h1 className="portfolio-name">
              Rajeshkanna <span>Jayabalan</span>
            </h1>
            <button
              className="view-resume-button flex"
              onClick={() => navigator("/resume")}
            >
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
                I’m <br className="mobile-show web-not-show"></br> Rajeshkanna
                Jayabalan,
              </span>
              <br />{" "}
              <span className="non-high-lighted-name">UX & UI Designer</span>
            </h3>
            <p className="portfolio-description">
              I take pride in mentoring early-career designers, building
              cross-functional <br className="mobile-not-show web-show"></br>
              partnerships, and thriving in complex, dynamic environments.
            </p>

            <div className=" mobile-show flex">
              <button
                className="view-resume-button flex mb-24"
                onClick={videResume}
              >
                <span>View Resume </span>
                <img src={ViewResume} />
              </button>
            </div>
          </section>
        </header>

        <div className="project_and_client ">
          <h2 className="project_and_client_title">
            Top clients I've worked with
          </h2>

          <ul className="flex">
            {clientAndProjectIcon.map((i) => (
              <li className="project-icon-image">
                <img src={i} />
              </li>
            ))}
          </ul>
        </div>

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
          <div className="project-cards">
            {projects.map((project) => (
              <div
                className={project.CardClass + " " + "project-card  "}
                key={project.id}
                onClick={() => navigator("/project/" + project.uniqueId)}
              >
                <div className="project-image-container">
                  <Video url={video} className="project-video" />
                  <div className={"project-badges"}>
                    <button
                      className={`${"live-" + project.class} badge-category`}
                    >
                     {project?.live ? project.live :"Live"}
                    </button>
                    <button
                      className={`${"badge-" + project.class}  badge-category`}
                    >
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
                    <i className="vide-case-project-icon flex">
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
                    </i>
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
                onClick={() => setSelectedImage(creation.image)}
                // onClick={() => navigator("/project/" + creation.uniqueId)}
              >
                <img
                  src={creation.image}
                  alt={creation.alt}
                  className="creation-image"
                />
                <div className="flex-btwn">
                  <h2 className="creation-title">{creation?.projectName}</h2>
                  <i className="creation-svg-icon">
                    <svg
                      // onClick={() => navigator("/project/" + creation.uniqueId)}
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
                  </i>
                </div>
                <div className="app-icons flex-start-start flex-wrap">
                  {creation.platforms?.map((i) => (
                    <>
                      <button className="app-icon flex-flex-start">
                        <i className="creation-app-icon-img">
                          {i.img == 0 ? <MobileIcon /> : <DesktopIcon />}
                        </i>
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
              <a>
                <i>
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.16667 0.555664H19.8333C20.1428 0.555664 20.4395 0.67858 20.6583 0.897373C20.8771 1.11617 21 1.41291 21 1.72233V20.389C21 20.6984 20.8771 20.9952 20.6583 21.214C20.4395 21.4327 20.1428 21.5557 19.8333 21.5557H1.16667C0.857247 21.5557 0.560501 21.4327 0.341709 21.214C0.122916 20.9952 0 20.6984 0 20.389V1.72233C0 1.41291 0.122916 1.11617 0.341709 0.897373C0.560501 0.67858 0.857247 0.555664 1.16667 0.555664ZM2.33333 2.889V19.2223H18.6667V2.889H2.33333ZM5.25 7.55566C4.78587 7.55566 4.34075 7.37129 4.01256 7.0431C3.68437 6.71491 3.5 6.26979 3.5 5.80566C3.5 5.34154 3.68437 4.89642 4.01256 4.56823C4.34075 4.24004 4.78587 4.05566 5.25 4.05566C5.71413 4.05566 6.15925 4.24004 6.48744 4.56823C6.81563 4.89642 7 5.34154 7 5.80566C7 6.26979 6.81563 6.71491 6.48744 7.0431C6.15925 7.37129 5.71413 7.55566 5.25 7.55566ZM4.08333 8.72233H6.41667V17.4723H4.08333V8.72233ZM10.5 9.224C11.1813 8.56483 11.977 8.139 12.8333 8.139C15.2495 8.139 16.9167 10.0978 16.9167 12.514V17.4723H14.5833V12.514C14.5833 11.9725 14.3682 11.4532 13.9853 11.0703C13.6025 10.6874 13.0831 10.4723 12.5417 10.4723C12.0002 10.4723 11.4809 10.6874 11.098 11.0703C10.7151 11.4532 10.5 11.9725 10.5 12.514V17.4723H8.16667V8.72233H10.5V9.224Z"
                      fill="#3D3D3D"
                    />
                  </svg>
                </i>
                <span>Check out Linkedin</span>
              </a>
              <a>
                <i>
                  <DesktopIcon />
                </i>
                <span>Portfolio Web Version</span>
              </a>

              <a>
                <i>
                  <MobileIcon />
                </i>
                <span>Portfolio Mobile Version</span>
              </a>

              <a>
                <i>
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.54 19.4957L21.2806 20.1677L21.281 20.1672L20.54 19.4957ZM18.9 20.6757L18.5208 19.7503L18.5154 19.7526L18.9 20.6757ZM10.25 18.3457L9.66016 19.1532L9.66141 19.1541L10.25 18.3457ZM6.97 15.5457L6.25945 16.2494L6.26632 16.2562L6.97 15.5457ZM4.18 12.2757L3.36818 12.8596L3.37157 12.8643L4.18 12.2757ZM2.22 8.86566L1.29836 9.25372L1.2996 9.25663L2.22 8.86566ZM1.86 3.66566L2.78849 4.03706L2.79057 4.03179L1.86 3.66566ZM3.01 1.99566L3.69622 2.72306L3.70395 2.71577L3.71152 2.70832L3.01 1.99566ZM5.9 1.23566L5.46727 2.13719L5.47408 2.14046L5.48094 2.14362L5.9 1.23566ZM6.57 1.79566L5.74775 2.36491L5.75442 2.3743L6.57 1.79566ZM8.89 5.06566L8.0744 5.64432L8.07847 5.64997L8.89 5.06566ZM9.29 5.76566L8.36445 6.1443L8.36759 6.15197L8.37085 6.15958L9.29 5.76566ZM9.22 7.08566L8.3658 6.56572L8.35739 6.57953L8.34944 6.59361L9.22 7.08566ZM8.66 7.79566L7.95289 7.08856L7.94605 7.0954L7.93934 7.10237L8.66 7.79566ZM7.9 8.58566L8.60711 9.29277L8.61395 9.28593L8.62066 9.27895L7.9 8.58566ZM7.77 9.21566L6.79986 9.4582L6.81367 9.51346L6.83367 9.56679L7.77 9.21566ZM7.85 9.41566L6.90132 9.73189L6.92947 9.81635L6.97211 9.89452L7.85 9.41566ZM8.78 10.6957L8.01657 11.3416L8.02383 11.35L8.78 10.6957ZM10.23 12.2757L9.51619 12.976L9.5228 12.9827L9.52953 12.9893L10.23 12.2757ZM11.82 13.7457L11.1728 14.508L11.1741 14.5091L11.82 13.7457ZM13.11 14.6657L12.6421 15.5495L12.6892 15.5744L12.7386 15.5941L13.11 14.6657ZM13.29 14.7457L12.8961 15.6648L12.9173 15.6739L12.9389 15.682L13.29 14.7457ZM13.95 14.6157L13.2476 13.9039L13.2429 13.9086L13.95 14.6157ZM14.71 13.8657L15.4124 14.5775L15.4171 14.5728L14.71 13.8657ZM15.43 13.3057L15.8926 14.1922L15.9218 14.177L15.9499 14.1599L15.43 13.3057ZM17.45 13.6157L18.0289 12.8003L18.0207 12.7944L18.0123 12.7887L17.45 13.6157ZM20.76 15.9657L20.1811 16.7811L20.1908 16.7879L20.76 15.9657ZM21.31 16.6057L22.2385 16.2343L22.2322 16.2185L22.2253 16.2029L21.31 16.6057ZM17 8.05566C17 8.60795 17.4477 9.05566 18 9.05566C18.5523 9.05566 19 8.60795 19 8.05566H17ZM16.83 5.78566L16.0968 6.46571L16.0989 6.46798L16.83 5.78566ZM14.5 3.55566C13.9477 3.55566 13.5 4.00338 13.5 4.55566C13.5 5.10795 13.9477 5.55566 14.5 5.55566V3.55566ZM20.5 8.05566C20.5 8.60795 20.9477 9.05566 21.5 9.05566C22.0523 9.05566 22.5 8.60795 22.5 8.05566H20.5ZM14.5 0.0556641C13.9477 0.0556641 13.5 0.503379 13.5 1.05566C13.5 1.60795 13.9477 2.05566 14.5 2.05566V0.0556641ZM20.47 17.3857C20.47 17.5957 20.4237 17.8201 20.3158 18.0487L22.1242 18.9027C22.3563 18.4113 22.47 17.8956 22.47 17.3857H20.47ZM20.3158 18.0487C20.1854 18.3246 20.0192 18.5812 19.799 18.8241L21.281 20.1672C21.6408 19.7701 21.9146 19.3467 22.1242 18.9027L20.3158 18.0487ZM19.7994 18.8237C19.3975 19.2666 18.9773 19.5632 18.5208 19.7504L19.2792 21.601C20.0427 21.2881 20.7025 20.8047 21.2806 20.1677L19.7994 18.8237ZM18.5154 19.7526C18.0419 19.9499 17.5231 20.0557 16.95 20.0557V22.0557C17.7769 22.0557 18.5581 21.9014 19.2846 21.5987L18.5154 19.7526ZM16.95 20.0557C16.0881 20.0557 15.1316 19.8529 14.082 19.4057L13.298 21.2456C14.5484 21.7784 15.7719 22.0557 16.95 22.0557V20.0557ZM14.082 19.4057C13.0086 18.9483 11.9241 18.3275 10.8386 17.5372L9.66141 19.1541C10.8559 20.0238 12.0714 20.723 13.298 21.2456L14.082 19.4057ZM10.8398 17.5381C9.73105 16.7282 8.67901 15.8308 7.67368 14.8351L6.26632 16.2562C7.34099 17.3205 8.46895 18.2831 9.66016 19.1532L10.8398 17.5381ZM7.68051 14.842C6.68467 13.8365 5.78764 12.7848 4.98843 11.6871L3.37157 12.8643C4.23236 14.0465 5.19533 15.1749 6.25949 16.2493L7.68051 14.842ZM4.9918 11.6917C4.20699 10.6007 3.58653 9.52495 3.1404 8.4747L1.2996 9.25663C1.81347 10.4664 2.51301 11.6707 3.3682 12.8596L4.9918 11.6917ZM3.14164 8.47761C2.70374 7.43761 2.5 6.47965 2.5 5.59566H0.5C0.5 6.79167 0.77626 8.01372 1.29836 9.25372L3.14164 8.47761ZM2.5 5.59566C2.5 5.03418 2.59885 4.51111 2.78848 4.03705L0.931523 3.29427C0.641145 4.02022 0.5 4.79715 0.5 5.59566H2.5ZM2.79057 4.03179C2.97341 3.56706 3.26654 3.12841 3.69622 2.72306L2.32378 1.26827C1.69346 1.86292 1.22659 2.54427 0.929434 3.29954L2.79057 4.03179ZM3.71152 2.70832C4.20058 2.2269 4.65916 2.05566 5.09 2.05566V0.0556641C4.04084 0.0556641 3.09942 0.50443 2.30848 1.28301L3.71152 2.70832ZM5.09 2.05566C5.22997 2.05566 5.36085 2.08611 5.46727 2.13719L6.33273 0.334141C5.93915 0.14522 5.51003 0.0556641 5.09 0.0556641V2.05566ZM5.48094 2.14362C5.59238 2.19506 5.67775 2.26368 5.74781 2.36487L7.39219 1.22645C7.10225 0.807647 6.72762 0.51627 6.31906 0.327705L5.48094 2.14362ZM5.75442 2.3743L8.07442 5.6443L9.70558 4.48702L7.38558 1.21702L5.75442 2.3743ZM8.07847 5.64997C8.22224 5.84965 8.30994 6.01105 8.36445 6.1443L10.2155 5.38703C10.0901 5.08028 9.91776 4.78168 9.70153 4.48136L8.07847 5.64997ZM8.37085 6.15958C8.42187 6.27863 8.43 6.35333 8.43 6.37566H10.43C10.43 6.01799 10.3381 5.6727 10.2091 5.37174L8.37085 6.15958ZM8.43 6.37566C8.43 6.41437 8.42019 6.47637 8.3658 6.56572L10.0742 7.60561C10.2998 7.23496 10.43 6.81696 10.43 6.37566H8.43ZM8.34944 6.59361C8.27529 6.7248 8.14758 6.89387 7.95289 7.08856L9.36711 8.50277C9.65242 8.21746 9.90471 7.90653 10.0906 7.57772L8.34944 6.59361ZM7.93934 7.10237L7.17934 7.89237L8.62066 9.27895L9.38066 8.48896L7.93934 7.10237ZM7.19289 7.87856C6.87988 8.19157 6.74 8.58316 6.74 8.98566H8.74C8.74 9.01144 8.73559 9.06674 8.70843 9.13528C8.68052 9.20573 8.64092 9.25896 8.60711 9.29277L7.19289 7.87856ZM6.74 8.98566C6.74 9.1604 6.76344 9.31254 6.79986 9.4582L8.74014 8.97313C8.73737 8.96205 8.73785 8.96194 8.73873 8.9685C8.73914 8.97159 8.7395 8.97509 8.73973 8.97866C8.73996 8.98221 8.74 8.98467 8.74 8.98566H6.74ZM6.83367 9.56679C6.85743 9.63013 6.88131 9.68569 6.89278 9.7128C6.90765 9.74795 6.90539 9.74411 6.90132 9.73189L8.79868 9.09944C8.77461 9.02722 8.74735 8.96338 8.73472 8.93352C8.71869 8.89563 8.71257 8.8812 8.70633 8.86454L6.83367 9.56679ZM6.97211 9.89452C7.19936 10.3112 7.55892 10.8007 8.01661 11.3416L9.54339 10.0497C9.12108 9.55063 8.86064 9.18018 8.7279 8.93681L6.97211 9.89452ZM8.02383 11.35C8.48401 11.8818 8.97831 12.4278 9.51619 12.976L10.9438 11.5753C10.4417 11.0636 9.97599 10.5495 9.53617 10.0413L8.02383 11.35ZM9.52953 12.9893C10.0776 13.5272 10.6168 14.0359 11.1728 14.508L12.4672 12.9834C11.9632 12.5554 11.4624 12.0841 10.9305 11.562L9.52953 12.9893ZM11.1741 14.5091C11.7236 14.9741 12.2148 15.3233 12.6421 15.5495L13.5779 13.7819C13.3252 13.6481 12.9564 13.3972 12.4659 12.9823L11.1741 14.5091ZM12.7386 15.5941C12.7371 15.5935 12.7426 15.5957 12.7758 15.611C12.8023 15.6231 12.8472 15.6439 12.8961 15.6648L13.6839 13.8265C13.6628 13.8175 13.6427 13.8082 13.6092 13.7928C13.5824 13.7806 13.5329 13.7578 13.4814 13.7372L12.7386 15.5941ZM12.9389 15.682C13.165 15.7668 13.3725 15.7857 13.54 15.7857V13.7857C13.5315 13.7857 13.5409 13.7851 13.5611 13.7882C13.583 13.7915 13.6109 13.798 13.6411 13.8093L12.9389 15.682ZM13.54 15.7857C13.9894 15.7857 14.3698 15.61 14.6571 15.3228L13.2429 13.9086C13.2645 13.8869 13.3086 13.8504 13.3756 13.8219C13.4437 13.7929 13.5036 13.7857 13.54 13.7857V15.7857ZM14.6524 15.3274L15.4124 14.5774L14.0076 13.1539L13.2476 13.9039L14.6524 15.3274ZM15.4171 14.5728C15.6267 14.3632 15.7852 14.2483 15.8926 14.1922L14.9674 12.4191C14.6148 12.603 14.2933 12.8681 14.0029 13.1586L15.4171 14.5728ZM15.9499 14.1599C16.0429 14.1033 16.0951 14.0957 16.14 14.0957V12.0957C15.6849 12.0957 15.2771 12.228 14.9101 12.4515L15.9499 14.1599ZM16.14 14.0957C16.1834 14.0957 16.255 14.1036 16.3714 14.1512L17.1286 12.3001C16.805 12.1677 16.4766 12.0957 16.14 12.0957V14.0957ZM16.3714 14.1512C16.5074 14.2069 16.6748 14.2978 16.8877 14.4426L18.0123 12.7887C17.7252 12.5935 17.4326 12.4245 17.1286 12.3001L16.3714 14.1512ZM16.8711 14.4311L20.1811 16.7811L21.3389 15.1503L18.0289 12.8003L16.8711 14.4311ZM20.1908 16.7879C20.3221 16.8788 20.3697 16.9516 20.3947 17.0084L22.2253 16.2029C22.0303 15.7597 21.7179 15.4125 21.3292 15.1435L20.1908 16.7879ZM20.3815 16.9771C20.445 17.1357 20.47 17.2588 20.47 17.3857H22.47C22.47 16.9525 22.375 16.5756 22.2385 16.2343L20.3815 16.9771ZM19 8.05566C19 7.52924 18.8058 6.98442 18.5669 6.51969C18.3175 6.03473 17.9706 5.54214 17.5611 5.10335L16.0989 6.46798C16.3894 6.77918 16.6275 7.1216 16.7881 7.43414C16.9592 7.76691 17 7.98209 17 8.05566H19ZM17.5632 5.10562C16.8397 4.32563 15.7428 3.55566 14.5 3.55566V5.55566C14.9372 5.55566 15.5403 5.8657 16.0968 6.46571L17.5632 5.10562ZM22.5 8.05566C22.5 3.63338 18.9223 0.0556641 14.5 0.0556641V2.05566C17.8177 2.05566 20.5 4.73795 20.5 8.05566H22.5Z"
                      fill="#3D3D3D"
                    />
                    <path
                      d="M20.54 19.4957L21.2806 20.1677L21.281 20.1672L20.54 19.4957ZM18.9 20.6757L18.5208 19.7503L18.5154 19.7526L18.9 20.6757ZM10.25 18.3457L9.66016 19.1532L9.66141 19.1541L10.25 18.3457ZM6.97 15.5457L6.25945 16.2494L6.26632 16.2562L6.97 15.5457ZM4.18 12.2757L3.36818 12.8596L3.37157 12.8643L4.18 12.2757ZM2.22 8.86566L1.29836 9.25372L1.2996 9.25663L2.22 8.86566ZM1.86 3.66566L2.78849 4.03706L2.79057 4.03179L1.86 3.66566ZM3.01 1.99566L3.69622 2.72306L3.70395 2.71577L3.71152 2.70832L3.01 1.99566ZM5.9 1.23566L5.46727 2.13719L5.47408 2.14046L5.48094 2.14362L5.9 1.23566ZM6.57 1.79566L5.74775 2.36491L5.75442 2.3743L6.57 1.79566ZM8.89 5.06566L8.0744 5.64432L8.07847 5.64997L8.89 5.06566ZM9.29 5.76566L8.36445 6.1443L8.36759 6.15197L8.37085 6.15958L9.29 5.76566ZM9.22 7.08566L8.3658 6.56572L8.35739 6.57953L8.34944 6.59361L9.22 7.08566ZM8.66 7.79566L7.95289 7.08856L7.94605 7.0954L7.93934 7.10237L8.66 7.79566ZM7.9 8.58566L8.60711 9.29277L8.61395 9.28593L8.62066 9.27895L7.9 8.58566ZM7.77 9.21566L6.79986 9.4582L6.81367 9.51346L6.83367 9.56679L7.77 9.21566ZM7.85 9.41566L6.90132 9.73189L6.92947 9.81635L6.97211 9.89452L7.85 9.41566ZM8.78 10.6957L8.01657 11.3416L8.02383 11.35L8.78 10.6957ZM10.23 12.2757L9.51619 12.976L9.5228 12.9827L9.52953 12.9893L10.23 12.2757ZM11.82 13.7457L11.1728 14.508L11.1741 14.5091L11.82 13.7457ZM13.11 14.6657L12.6421 15.5495L12.6892 15.5744L12.7386 15.5941L13.11 14.6657ZM13.29 14.7457L12.8961 15.6648L12.9173 15.6739L12.9389 15.682L13.29 14.7457ZM13.95 14.6157L13.2476 13.9039L13.2429 13.9086L13.95 14.6157ZM14.71 13.8657L15.4124 14.5775L15.4171 14.5728L14.71 13.8657ZM15.43 13.3057L15.8926 14.1922L15.9218 14.177L15.9499 14.1599L15.43 13.3057ZM17.45 13.6157L18.0289 12.8003L18.0207 12.7944L18.0123 12.7887L17.45 13.6157ZM20.76 15.9657L20.1811 16.7811L20.1908 16.7879L20.76 15.9657ZM21.31 16.6057L22.2385 16.2343L22.2322 16.2185L22.2253 16.2029L21.31 16.6057ZM17 8.05566C17 8.60795 17.4477 9.05566 18 9.05566C18.5523 9.05566 19 8.60795 19 8.05566H17ZM16.83 5.78566L16.0968 6.46571L16.0989 6.46798L16.83 5.78566ZM14.5 3.55566C13.9477 3.55566 13.5 4.00338 13.5 4.55566C13.5 5.10795 13.9477 5.55566 14.5 5.55566V3.55566ZM20.5 8.05566C20.5 8.60795 20.9477 9.05566 21.5 9.05566C22.0523 9.05566 22.5 8.60795 22.5 8.05566H20.5ZM14.5 0.0556641C13.9477 0.0556641 13.5 0.503379 13.5 1.05566C13.5 1.60795 13.9477 2.05566 14.5 2.05566V0.0556641ZM20.47 17.3857C20.47 17.5957 20.4237 17.8201 20.3158 18.0487L22.1242 18.9027C22.3563 18.4113 22.47 17.8956 22.47 17.3857H20.47ZM20.3158 18.0487C20.1854 18.3246 20.0192 18.5812 19.799 18.8241L21.281 20.1672C21.6408 19.7701 21.9146 19.3467 22.1242 18.9027L20.3158 18.0487ZM19.7994 18.8237C19.3975 19.2666 18.9773 19.5632 18.5208 19.7504L19.2792 21.601C20.0427 21.2881 20.7025 20.8047 21.2806 20.1677L19.7994 18.8237ZM18.5154 19.7526C18.0419 19.9499 17.5231 20.0557 16.95 20.0557V22.0557C17.7769 22.0557 18.5581 21.9014 19.2846 21.5987L18.5154 19.7526ZM16.95 20.0557C16.0881 20.0557 15.1316 19.8529 14.082 19.4057L13.298 21.2456C14.5484 21.7784 15.7719 22.0557 16.95 22.0557V20.0557ZM14.082 19.4057C13.0086 18.9483 11.9241 18.3275 10.8386 17.5372L9.66141 19.1541C10.8559 20.0238 12.0714 20.723 13.298 21.2456L14.082 19.4057ZM10.8398 17.5381C9.73105 16.7282 8.67901 15.8308 7.67368 14.8351L6.26632 16.2562C7.34099 17.3205 8.46895 18.2831 9.66016 19.1532L10.8398 17.5381ZM7.68051 14.842C6.68467 13.8365 5.78764 12.7848 4.98843 11.6871L3.37157 12.8643C4.23236 14.0465 5.19533 15.1749 6.25949 16.2493L7.68051 14.842ZM4.9918 11.6917C4.20699 10.6007 3.58653 9.52495 3.1404 8.4747L1.2996 9.25663C1.81347 10.4664 2.51301 11.6707 3.3682 12.8596L4.9918 11.6917ZM3.14164 8.47761C2.70374 7.43761 2.5 6.47965 2.5 5.59566H0.5C0.5 6.79167 0.77626 8.01372 1.29836 9.25372L3.14164 8.47761ZM2.5 5.59566C2.5 5.03418 2.59885 4.51111 2.78848 4.03705L0.931523 3.29427C0.641145 4.02022 0.5 4.79715 0.5 5.59566H2.5ZM2.79057 4.03179C2.97341 3.56706 3.26654 3.12841 3.69622 2.72306L2.32378 1.26827C1.69346 1.86292 1.22659 2.54427 0.929434 3.29954L2.79057 4.03179ZM3.71152 2.70832C4.20058 2.2269 4.65916 2.05566 5.09 2.05566V0.0556641C4.04084 0.0556641 3.09942 0.50443 2.30848 1.28301L3.71152 2.70832ZM5.09 2.05566C5.22997 2.05566 5.36085 2.08611 5.46727 2.13719L6.33273 0.334141C5.93915 0.14522 5.51003 0.0556641 5.09 0.0556641V2.05566ZM5.48094 2.14362C5.59238 2.19506 5.67775 2.26368 5.74781 2.36487L7.39219 1.22645C7.10225 0.807647 6.72762 0.51627 6.31906 0.327705L5.48094 2.14362ZM5.75442 2.3743L8.07442 5.6443L9.70558 4.48702L7.38558 1.21702L5.75442 2.3743ZM8.07847 5.64997C8.22224 5.84965 8.30994 6.01105 8.36445 6.1443L10.2155 5.38703C10.0901 5.08028 9.91776 4.78168 9.70153 4.48136L8.07847 5.64997ZM8.37085 6.15958C8.42187 6.27863 8.43 6.35333 8.43 6.37566H10.43C10.43 6.01799 10.3381 5.6727 10.2091 5.37174L8.37085 6.15958ZM8.43 6.37566C8.43 6.41437 8.42019 6.47637 8.3658 6.56572L10.0742 7.60561C10.2998 7.23496 10.43 6.81696 10.43 6.37566H8.43ZM8.34944 6.59361C8.27529 6.7248 8.14758 6.89387 7.95289 7.08856L9.36711 8.50277C9.65242 8.21746 9.90471 7.90653 10.0906 7.57772L8.34944 6.59361ZM7.93934 7.10237L7.17934 7.89237L8.62066 9.27895L9.38066 8.48896L7.93934 7.10237ZM7.19289 7.87856C6.87988 8.19157 6.74 8.58316 6.74 8.98566H8.74C8.74 9.01144 8.73559 9.06674 8.70843 9.13528C8.68052 9.20573 8.64092 9.25896 8.60711 9.29277L7.19289 7.87856ZM6.74 8.98566C6.74 9.1604 6.76344 9.31254 6.79986 9.4582L8.74014 8.97313C8.73737 8.96205 8.73785 8.96194 8.73873 8.9685C8.73914 8.97159 8.7395 8.97509 8.73973 8.97866C8.73996 8.98221 8.74 8.98467 8.74 8.98566H6.74ZM6.83367 9.56679C6.85743 9.63013 6.88131 9.68569 6.89278 9.7128C6.90765 9.74795 6.90539 9.74411 6.90132 9.73189L8.79868 9.09944C8.77461 9.02722 8.74735 8.96338 8.73472 8.93352C8.71869 8.89563 8.71257 8.8812 8.70633 8.86454L6.83367 9.56679ZM6.97211 9.89452C7.19936 10.3112 7.55892 10.8007 8.01661 11.3416L9.54339 10.0497C9.12108 9.55063 8.86064 9.18018 8.7279 8.93681L6.97211 9.89452ZM8.02383 11.35C8.48401 11.8818 8.97831 12.4278 9.51619 12.976L10.9438 11.5753C10.4417 11.0636 9.97599 10.5495 9.53617 10.0413L8.02383 11.35ZM9.52953 12.9893C10.0776 13.5272 10.6168 14.0359 11.1728 14.508L12.4672 12.9834C11.9632 12.5554 11.4624 12.0841 10.9305 11.562L9.52953 12.9893ZM11.1741 14.5091C11.7236 14.9741 12.2148 15.3233 12.6421 15.5495L13.5779 13.7819C13.3252 13.6481 12.9564 13.3972 12.4659 12.9823L11.1741 14.5091ZM12.7386 15.5941C12.7371 15.5935 12.7426 15.5957 12.7758 15.611C12.8023 15.6231 12.8472 15.6439 12.8961 15.6648L13.6839 13.8265C13.6628 13.8175 13.6427 13.8082 13.6092 13.7928C13.5824 13.7806 13.5329 13.7578 13.4814 13.7372L12.7386 15.5941ZM12.9389 15.682C13.165 15.7668 13.3725 15.7857 13.54 15.7857V13.7857C13.5315 13.7857 13.5409 13.7851 13.5611 13.7882C13.583 13.7915 13.6109 13.798 13.6411 13.8093L12.9389 15.682ZM13.54 15.7857C13.9894 15.7857 14.3698 15.61 14.6571 15.3228L13.2429 13.9086C13.2645 13.8869 13.3086 13.8504 13.3756 13.8219C13.4437 13.7929 13.5036 13.7857 13.54 13.7857V15.7857ZM14.6524 15.3274L15.4124 14.5774L14.0076 13.1539L13.2476 13.9039L14.6524 15.3274ZM15.4171 14.5728C15.6267 14.3632 15.7852 14.2483 15.8926 14.1922L14.9674 12.4191C14.6148 12.603 14.2933 12.8681 14.0029 13.1586L15.4171 14.5728ZM15.9499 14.1599C16.0429 14.1033 16.0951 14.0957 16.14 14.0957V12.0957C15.6849 12.0957 15.2771 12.228 14.9101 12.4515L15.9499 14.1599ZM16.14 14.0957C16.1834 14.0957 16.255 14.1036 16.3714 14.1512L17.1286 12.3001C16.805 12.1677 16.4766 12.0957 16.14 12.0957V14.0957ZM16.3714 14.1512C16.5074 14.2069 16.6748 14.2978 16.8877 14.4426L18.0123 12.7887C17.7252 12.5935 17.4326 12.4245 17.1286 12.3001L16.3714 14.1512ZM16.8711 14.4311L20.1811 16.7811L21.3389 15.1503L18.0289 12.8003L16.8711 14.4311ZM20.1908 16.7879C20.3221 16.8788 20.3697 16.9516 20.3947 17.0084L22.2253 16.2029C22.0303 15.7597 21.7179 15.4125 21.3292 15.1435L20.1908 16.7879ZM20.3815 16.9771C20.445 17.1357 20.47 17.2588 20.47 17.3857H22.47C22.47 16.9525 22.375 16.5756 22.2385 16.2343L20.3815 16.9771ZM19 8.05566C19 7.52924 18.8058 6.98442 18.5669 6.51969C18.3175 6.03473 17.9706 5.54214 17.5611 5.10335L16.0989 6.46798C16.3894 6.77918 16.6275 7.1216 16.7881 7.43414C16.9592 7.76691 17 7.98209 17 8.05566H19ZM17.5632 5.10562C16.8397 4.32563 15.7428 3.55566 14.5 3.55566V5.55566C14.9372 5.55566 15.5403 5.8657 16.0968 6.46571L17.5632 5.10562ZM22.5 8.05566C22.5 3.63338 18.9223 0.0556641 14.5 0.0556641V2.05566C17.8177 2.05566 20.5 4.73795 20.5 8.05566H22.5Z"
                      fill="#3D3D3D"
                    />
                  </svg>
                </i>

                <span>+91 88259 31607</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

const projects = [
  {
    id: 1,
    uniqueId: uniqueIdForProject.oneGolde,
    title: "OneGold",
    category: "Online Trading",
    description:
      "A ground-up mobile trading solution that brought in advanced trading features such as SIP management and Stop/Loss strategy.",
    image: asset.oneGolde.liveProjectImage,
    link: "#",
    class: "type1",
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
    class: "type2",
    CardClass: "project-card-type2",
  },
  {
    id: 4,
    title: "YOLO Works",
    uniqueId: uniqueIdForProject.yoloWorks,
    category: "E-Learning",
    live: "Product",
    description:
      "A ground-up mobile trading solution that brought in advanced trading features such as SIP management and Stop/Loss strategy",
    image: asset.yoloWorks.liveProjectImage,
    link: "#",
    class: "type3",
    CardClass: "project-card-type3",
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
    class: "type4",

    CardClass: "project-card-type4",
  },

  {
    id: 5,
    title: "Vittae",
    uniqueId: uniqueIdForProject.vittae,
    category: "Finance",
    description:
      "A ground-up mobile trading solution that brought in advanced trading features such as SIP management and Stop/Loss strategy",
    image: asset.vitte.liveProjectImage,
    link: "#",
    CardClass: "project-card-type5",
    class: "type5",
  },
  // {
  //   id: 6,
  //   title: "LMES",
  //   uniqueId: uniqueIdForProject.limes,
  //   category: "E-Learning",
  //   description:
  //     "An Ed-tech learning platform for super speciality medical programs with comprehensive progress tracking, in-app live sessions and adaptive testing.",
  //   image: asset.limes.liveProjectImage,
  //   link: "#",
  //   class: "type3",
  //   CardClass: "project-card-type6",
  // },
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
        img: 0,
      },
      {
        content: "Web Design",
        img: 1,
      },
      {
        content: "Web Admin",
        img: 1,
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
        img: 0,
      },
      {
        content: "Web Design",
        img: 1,
      },
    ],
  },
  {
    id: 7,
    image: asset.limes.projectimage,
    alt: "Creation 7",
    uniqueId: uniqueIdForProject.limes,
    projectName: "LMES",
    platforms: [
      {
        content: "Mobile App",
        img: 0,
      },
      {
        content: "Web Design",
        img: 1,
      },
      {
        content: "Web Admin",
        img: 1,
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
        img: 0,
      },
      {
        content: "Web Design",
        img: 1,
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
        img: 0,
      },
      {
        content: "Web Design",
        img: 1,
      },
      {
        content: "Web Admin",
        img: 1,
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
        img: 0,
      },
      {
        content: "Web Design",
        img: 1,
      },
      {
        content: "Web Admin",
        img: 1,
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
        img: 0,
      },
      {
        content: "Web Design",
        img: 1,
      },
      {
        content: "Web Admin",
        img: 1,
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
        img: 0,
      },
      {
        content: "Web Admin",
        img: 1,
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

const clientAndProjectIcon = [
  asset.oneGolde.iconOfProject,
  asset.apmex.iconOfProject,
  asset.limes.iconOfProject,
  asset.surgtest.iconOfProject,
  asset.apmex.iconOfProject,
  asset.limes.iconOfProject,
  asset.surgtest.iconOfProject,
  asset.surgtest.iconOfProject,
];
