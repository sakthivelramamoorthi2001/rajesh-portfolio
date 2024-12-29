import PlayStroe from "../assets/playStore.svg";
import AppStore from "../assets/appStore.svg";
import "../css/Project.css";
import { useNavigate, useParams } from "react-router-dom";
import { projectInfo, uniqueIdForProject } from "../Const";
import asset from "../assets";
import { DesktopIcon, MobileIcon } from "../assets/Svg";
import { useEffect } from "react";
import { useState } from "react";

const Project = () => {
  const navigate = useNavigate();
  let { id = 1 } = useParams();
  id = Number(id);
  const paginationLength = [
    uniqueIdForProject.oneGolde,
    uniqueIdForProject.apmex,
    uniqueIdForProject.surgtest,
    uniqueIdForProject.yoloWorks,
    uniqueIdForProject.vittae,
  ].sort((a, b) => a - b);

  useEffect(() => {
    const yes = paginationLength.includes(id);
    if (yes) {
    } else {
      navigate("/*");
    }
  }, []);

  const selectedProject = projectInfo.find((i) => i.uniqueId == id);

  if(!selectedProject) {
    navigate("/*");
    return
  }

  const prevButtonDisable = paginationLength.findIndex((i) => i == id) != 0;
  const nextButtonDiable =
    paginationLength.findIndex((i) => i == id) != paginationLength.length - 1;
  const currentIndex = paginationLength.findIndex((i) => i == id);

  const paginationPrev = () => {
    if (prevButtonDisable) {
      navigate(`/project/${paginationLength[currentIndex - 1]}`);
    } else {
      window.alert("Start of the project");
    }
  };

  const paginationNext = () => {
    if (nextButtonDiable) {
      navigate(`/project/${paginationLength[currentIndex + 1]}`);
    } else {
      window.alert("end of the project");
    }
  };
  return (
    <div className="">
      <div className="header_of_info">
        <i onClick={() => navigate("/")} className="back-icon-in-project">
          <svg
            width="43"
            height="42"
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

        <i onClick={() => navigate("/")} className="close-icon-in-project">
          <svg
            width="18"
            height="18"
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

      <div className="project_info">
        <h2>{selectedProject.name}</h2>
        <p>{selectedProject.description}</p>

        <div className="app-icons flex">
          {selectedProject.platforms.map((i) => (
            <>
              <button className="app-icon flex-flex-start">
                <i className="flex mr-4">
                  {" "}
                  {i.img == 0 ? <MobileIcon /> : <DesktopIcon />}
                </i>{" "}
                <span>{i.content}</span>
              </button>
            </>
          ))}
        </div>
        <h3 className="available">Available In</h3>

        <div className="icon_store flex">
          <img src={PlayStroe} alt="" />
          <img src={AppStore} alt="" />
        </div>
      </div>

      <div className="project_title_img">
        <img src={selectedProject.imageOfMainTop} alt="" />
      </div>

      <div className="project_description_main ">
        <div className="project_description">
          <div className="overview">
            <h2 className="overview_title">Over View</h2>

            {selectedProject.overView.map((sub) => {
              return (
                <>
                  <h3 className="overview_subtitle">{sub.title}</h3>
                  <div className={sub.dot ? "dot_" : ""}>
                    {sub.content.map((i) => (
                      <li className="subtitle_content">{i}</li>
                    ))}
                  </div>
                </>
              );
            })}
          </div>

          <div className="break_line"></div>

          <div className="solution">
            {selectedProject.solution.map((i) => {
              return (
                <>
                  <h3 className="solution_title">{i.title}</h3>
                  <p className="solution_description">{i.content}</p>
                </>
              );
            })}
          </div>
        </div>
        <div className="image_of_project">
          <img src={selectedProject.imageOfProject} alt="" />
        </div>
      </div>

      <div className="learning">
        <h2 className="learning_title">My Learnings</h2>

        {selectedProject.learnings.map((i) => {
          return <p className="learning_description">{i}</p>;
        })}
      </div>

      <div className="pagination flex">
        <button
          className={`${
            prevButtonDisable ? "pagination_allow" : "pagination_notallow"
          } flex gap-4`}
          disabled={!prevButtonDisable}
          onClick={paginationPrev}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_930_2251)">
              <path
                d="M8.328 11.9366H20.5V13.9366H8.328L13.692 19.3006L12.278 20.7146L4.5 12.9366L12.278 5.15857L13.692 6.57257L8.328 11.9366Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_930_2251">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5 0.936523)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Previous Project</span>
        </button>
        <button
          disabled={!nextButtonDiable}
          className={`${
            nextButtonDiable ? "pagination_allow" : "pagination_notallow"
          } flex gap-4`}
          onClick={paginationNext}
        >
          <span>Next Project</span>

          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_930_2256)">
              <path
                d="M16.672 11.9366H4.5V13.9366H16.672L11.308 19.3006L12.722 20.7146L20.5 12.9366L12.722 5.15857L11.308 6.57257L16.672 11.9366Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_930_2256">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="matrix(-1 0 0 1 24.5 0.936523)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Project;
