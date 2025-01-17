import React, { useEffect, useRef } from "react";
import "../css/metalHome.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDraggable } from "react-use-draggable-scroll";

import aboutImg from "../assets/metal/about.png";
import aboutI from "../assets/metal/about-1.png";

const logo =
  "https://imgs.search.brave.com/Iyb61hEKxXGooJwn1-1Gz-UM2yIMvXnFh82c0SKzcsk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2FpLmNvbS91/cGxvYWRzL2ljb24v/MjAyMS8wOC8yNi85/MzQwYmRiNS00MzE4/LTQ5OTItODU4Yy0z/Yzc3MDdmYmI1NTAu/cG5n";

const contentImage = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7YFsFZHAgSHzOCuBMEo48-4_4hqJ5xAzFQ&s",
  "https://c4.wallpaperflare.com/wallpaper/41/681/303/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg",
  "https://wallpapers.com/images/featured/1920x1080-bei34cvs700mqnab.jpg",
];

const MetalHome = () => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref, {
    // activeMouseButton: "Middle",
    applyRubberBandEffect: true,
    decayRate: 0.96,
    safeDisplacement: 11,
  }); // Now we pass the reference to the useDraggable hook:

  const safetyAndSecurity = [
    {
      id: 1,
      title: "Safety and Reliability",
      Icon: (
        <>
          <svg
            fill="#ED5E34"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M6.97,30.75H25.03c.41,0,.75-.34,.75-.75V3.89c0-.41-.34-.75-.75-.75h-2.56v-1.14c0-.41-.34-.75-.75-.75s-.75,.34-.75,.75v1.14h-4.22v-1.14c0-.41-.34-.75-.75-.75s-.75,.34-.75,.75v1.14h-4.22v-1.14c0-.41-.34-.75-.75-.75s-.75,.34-.75,.75v1.14h-2.56c-.41,0-.75,.34-.75,.75V30c0,.41,.34,.75,.75,.75Zm.75-26.11h1.81v1.14c0,.41,.34,.75,.75,.75s.75-.34,.75-.75v-1.14h4.22v1.14c0,.41,.34,.75,.75,.75s.75-.34,.75-.75v-1.14h4.22v1.14c0,.41,.34,.75,.75,.75s.75-.34,.75-.75v-1.14h1.81V29.25H7.72V4.64Z"></path>
              <path d="M16.86,9.66h-6.57c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h6.57c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z"></path>
              <path d="M16.86,16.19h-6.57c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h6.57c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z"></path>
              <path d="M16.86,22.73h-6.57c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h6.57c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z"></path>
              <path d="M10.28,14.27h3.61c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75h-3.61c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75Z"></path>
              <path d="M10.28,21h3.61c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75h-3.61c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75Z"></path>
              <path d="M13.89,25.79h-3.61c-.41,0-.75,.34-.75,.75s.34,.75,.75,.75h3.61c.41,0,.75-.34,.75-.75s-.34-.75-.75-.75Z"></path>
            </g>
          </svg>
        </>
      ),
    },
    {
      id: 1,
      title: "Long Term Plan",
      Icon: (
        <>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M22 22L2 22"
                stroke="#ED5E34"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M2 11L6.06296 7.74968M22 11L13.8741 4.49931C12.7784 3.62279 11.2216 3.62279 10.1259 4.49931L9.34398 5.12486"
                stroke="#ED5E34"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M15.5 5.5V3.5C15.5 3.22386 15.7239 3 16 3H18.5C18.7761 3 19 3.22386 19 3.5V8.5"
                stroke="#ED5E34"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M4 22V9.5"
                stroke="#ED5E34"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M20 9.5V13.5M20 22V17.5"
                stroke="#ED5E34"
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M15 22V17C15 15.5858 15 14.8787 14.5607 14.4393C14.1213 14 13.4142 14 12 14C10.5858 14 9.87868 14 9.43934 14.4393M9 22V17"
                stroke="#ED5E34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5Z"
                stroke="#ED5E34"
                stroke-width="1.5"
              ></path>{" "}
            </g>
          </svg>
        </>
      ),
    },
    {
      id: 1,
      title: "Fully Experienced",
      Icon: (
        <>
          <svg
            viewBox="0 0 1024 1024"
            fill="#ED5E34"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M471.2 566.4c-9.6 0-17.6-8-17.6-17.6s8-17.6 17.6-17.6h81.6c9.6 0 17.6 8 17.6 17.6s-8 17.6-17.6 17.6H471.2zM186.4 361.6c-14.4 0-27.2-12.8-27.2-27.2 0-14.4 12.8-27.2 27.2-27.2h24.8c8.8 0 16-6.4 16-15.2 7.2-99.2 67.2-189.6 156.8-234.4 4-2.4 8.8-3.2 12-3.2 14.4 0 27.2 12.8 27.2 27.2v56c0 8.8 7.2 16 16 16s16-7.2 16-16V55.2c0-13.6 10.4-25.6 23.2-27.2 10.4-1.6 21.6-1.6 32-1.6 12 0 24.8 0.8 35.2 1.6 13.6 1.6 23.2 12.8 23.2 27.2v81.6c0 8.8 7.2 16 16 16s16-7.2 16-16v-55.2c0-14.4 12.8-27.2 27.2-27.2 3.2 0 8 0.8 12.8 3.2C732 104.8 790.4 192 797.6 292c0.8 8.8 7.2 15.2 16 15.2h24.8c14.4 0 27.2 12.8 27.2 27.2 0 14.4-12.8 27.2-27.2 27.2H186.4z m567.2-48c-2.4-6.4-3.2-12-4-18.4-4.8-69.6-41.6-134.4-98.4-176v17.6c0 35.2-28.8 64-64 64s-64-28.8-64-64V74.4H504V136c0 35.2-28.8 64-64 64s-64-28.8-64-64v-18.4c-59.2 41.6-96 107.2-101.6 177.6-0.8 6.4-1.6 12-4 18.4h483.2z"
                fill=""
              ></path>
              <path
                d="M83.2 1022.4c-20.8 0-40-8.8-52.8-24-11.2-13.6-16-31.2-12-48 32-164 181.6-298.4 376-336.8-74.4-48-120-136-120-234.4v-5.6h476.8v5.6c0 97.6-45.6 186.4-120.8 234.4 194.4 39.2 344 173.6 376 336.8 3.2 16.8-0.8 34.4-12 48-12.8 15.2-32 24-52.8 24H83.2zM512 649.6c-109.6 0-215.2 32-297.6 91.2-79.2 56.8-132 134.4-148.8 218.4-0.8 4 0.8 7.2 2.4 8 4 4.8 8.8 7.2 15.2 7.2h859.2c6.4 0 12-2.4 15.2-6.4 0.8-0.8 3.2-4 1.6-8-16-84.8-68.8-162.4-148.8-219.2C727.2 681.6 621.6 649.6 512 649.6zM324.8 421.6c17.6 104 95.2 179.2 186.4 179.2S680 525.6 697.6 421.6H324.8z"
                fill=""
              ></path>
            </g>
          </svg>
        </>
      ),
    },
    {
      id: 1,
      title: "Quality Metal",
      Icon: (
        <>
          <svg
            fill="#ED5E34"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title>alt-camera</title>{" "}
              <path d="M0 30.016q0 0.832 0.576 1.408t1.44 0.576h28q0.8 0 1.408-0.576t0.576-1.408v-22.016q0-0.832-0.576-1.408t-1.408-0.576h-8v-4q0-0.832-0.608-1.408t-1.408-0.608h-8q-0.832 0-1.408 0.608t-0.576 1.408v4h-4v-2.016h-2.016v2.016h-1.984q-0.832 0-1.44 0.576t-0.576 1.408v22.016zM4 28v-9.984h6.368q-0.352 0.992-0.352 1.984 0 2.496 1.728 4.256t4.256 1.76 4.256-1.76 1.76-4.256q0-0.96-0.384-1.984h6.368v9.984h-24zM4 16v-5.984h24v5.984h-7.552q-1.184-1.312-2.848-1.76t-3.264 0-2.784 1.76h-7.552zM6.016 14.016h1.984v-2.016h-1.984v2.016zM10.016 14.016h1.984v-2.016h-1.984v2.016zM12 20q0-1.632 1.184-2.816t2.816-1.184 2.816 1.184 1.184 2.816-1.184 2.848-2.816 1.152-2.816-1.152-1.184-2.848zM14.016 6.016v-2.016h4v2.016h-4zM22.016 14.016h4v-2.016h-4v2.016z"></path>{" "}
            </g>
          </svg>
        </>
      ),
    },
  ];

  return (
    <div className="container-metalHome">
      <div className="header-top-row">
        <p>Best Global Company Service Company</p>
        <div className="header-top-row-right">
          <div className="header-right-content-1">
            <i>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.88 2C30.7166 2 37.88 9.16344 37.88 18M22.88 9C27.2983 9 30.88 12.5817 30.88 17"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1965 7.42446L13.3912 5.6125C12.8646 4.42775 12.6014 3.83536 12.2076 3.38203C11.7142 2.81388 11.0709 2.39588 10.3514 2.17569C9.77717 2 9.12892 2 7.83242 2C5.93582 2 4.98751 2 4.19146 2.36458C3.25374 2.79404 2.40687 3.72656 2.06946 4.7012C1.78302 5.52859 1.86507 6.37886 2.02916 8.0794C3.77582 26.1804 13.6996 36.1042 31.8006 37.8508C33.5011 38.0149 34.3514 38.097 35.1788 37.8105C36.1534 37.4731 37.086 36.6263 37.5154 35.6885C37.88 34.8925 37.88 33.9442 37.88 32.0476C37.88 30.7511 37.88 30.1028 37.7043 29.5287C37.4841 28.8091 37.0661 28.1659 36.498 27.6724C36.0447 27.2787 35.4522 27.0154 34.2675 26.4888L32.4555 25.6835C31.1725 25.1132 30.531 24.8281 29.8791 24.7661C29.2552 24.7068 28.6261 24.7943 28.0422 25.0217C27.432 25.2593 26.8926 25.7088 25.814 26.6076C24.7403 27.5024 24.2034 27.9498 23.5475 28.1894C22.966 28.4018 22.1971 28.4805 21.5846 28.3903C20.8937 28.2884 20.3647 28.0057 19.3066 27.4403C16.0144 25.6809 14.1991 23.8656 12.4397 20.5734C11.8743 19.5153 11.5916 18.9863 11.4897 18.2954C11.3995 17.6829 11.4782 16.914 11.6906 16.3325C11.9302 15.6766 12.3776 15.1397 13.2724 14.066C14.1712 12.9874 14.6207 12.448 14.8583 11.8378C15.0857 11.2539 15.1732 10.6248 15.1139 10.001C15.0519 9.34904 14.7668 8.70752 14.1965 7.42446Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </i>
            <p>Phone : 932424444</p>
          </div>
          <div className="divider"></div>
          <div className="header-right-content-2">
            <i>
              <svg
                width="44"
                height="42"
                viewBox="0 0 44 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.88 7.00006L15.7061 14.8493C20.7573 17.717 23.0027 17.717 28.054 14.8493L41.88 7.00006"
                  stroke="white"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.88 36C17.9474 35.9878 17.0136 35.97 16.0777 35.9464C9.78067 35.7881 6.63217 35.709 4.36992 33.4368C2.10766 31.1646 2.04229 28.0973 1.91154 21.9627C1.8695 19.9902 1.86949 18.0294 1.91153 16.0569C2.04228 9.92225 2.10765 6.85495 4.36991 4.58278C6.63217 2.31061 9.78066 2.23146 16.0776 2.07317C19.9586 1.97561 23.8014 1.97561 27.6824 2.07318C33.9794 2.23149 37.1278 2.31064 39.3901 4.58281C41.6524 6.85498 41.7177 9.92228 41.8485 16.0569C41.8678 16.965 41.8783 17.393 41.8798 18"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M35.88 31C35.88 32.6569 34.5369 34 32.88 34C31.2232 34 29.88 32.6569 29.88 31C29.88 29.3431 31.2232 28 32.88 28C34.5369 28 35.88 29.3431 35.88 31ZM35.88 31V32C35.88 33.6569 37.2232 35 38.88 35C40.5369 35 41.88 33.6569 41.88 32V31C41.88 26.0294 37.8506 22 32.88 22C27.9094 22 23.88 26.0294 23.88 31C23.88 35.9706 27.9094 40 32.88 40"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
            <p>infor @gmai.com</p>
          </div>
          <div className="divider"></div>
          <div className="header-social-icons">
            <i>
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.949 7.70969V12.2208H32.4977L30.8276 18.2988H21.949V32.3009C20.1684 32.432 18.3472 32.5 16.4989 32.5C14.3643 32.5 12.2704 32.4094 10.2282 32.2353V18.2988H0.5V12.2208H10.2282V6.70205C10.2282 3.27727 15.4755 0.5 21.9513 0.5V0.503578C21.9693 0.503578 21.9873 0.5 22.0054 0.5H32.5V5.75523H25.6434C23.6035 5.75523 21.9513 6.62931 21.9513 7.7085L21.949 7.70969Z"
                  fill="white"
                />
              </svg>
            </i>

            <i>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 3.27082C31.2487 4.24506 30.2074 4.84721 29.054 4.84721C28.9075 4.84721 28.761 4.83721 28.6192 4.8172C29.8225 3.89097 30.7515 2.44061 31.2144 0.710178C31.2144 0.710178 31.2159 0.710178 31.2159 0.708177C31.2798 0.476119 31.3344 0.24206 31.378 0C30.4257 1.30633 29.1242 2.19055 27.6637 2.4006C27.4392 2.43461 27.2117 2.45061 26.981 2.45061C26.9077 2.45061 26.8376 2.44861 26.7674 2.44261C26.2733 1.77644 25.6842 1.22631 25.0311 0.822206C24.3032 0.366092 23.4895 0.0980244 22.6306 0.0640159C22.5605 0.0580144 22.4904 0.0560137 22.4172 0.0560137C21.6893 0.0560137 20.991 0.222055 20.3457 0.528132C20.1804 0.606151 20.0199 0.690173 19.8624 0.788197C17.8174 2.0185 16.4021 4.68517 16.4021 7.77594C16.4021 8.4101 16.4629 9.02626 16.5736 9.6144C15.947 9.58239 15.3266 9.50437 14.7188 9.38835C14.5239 9.34834 14.329 9.30633 14.1358 9.25831C12.5849 8.88822 11.1057 8.25206 9.73094 7.38785C8.50113 6.61565 7.35395 5.66342 6.31118 4.55514C5.43364 3.62691 4.63093 2.59065 3.91393 1.45836C3.88276 1.41035 3.85153 1.36034 3.82192 1.31233C3.77983 1.39435 3.7409 1.47637 3.70661 1.56239C3.20471 2.68867 2.92103 3.991 2.92103 5.37934C2.92103 5.42135 2.92099 5.46737 2.92255 5.50938C2.93502 6.54964 3.10646 7.53988 3.41352 8.44011C3.54445 8.84021 3.70348 9.2183 3.88585 9.57639C4.4236 10.6387 5.1577 11.5229 6.02433 12.135C6.0633 12.167 6.10383 12.193 6.14435 12.2171C6.08201 12.2331 6.01814 12.2471 5.95424 12.2551C5.77654 12.2851 5.59262 12.3011 5.40869 12.3011C4.48595 12.3011 3.62712 11.931 2.92415 11.3008C2.91947 11.3668 2.91943 11.4349 2.91943 11.5029C2.91943 13.7074 3.63955 15.6959 4.79298 17.0983C5.69079 18.1985 6.85205 18.9367 8.14264 19.1528C7.67815 19.3708 7.17621 19.4889 6.65405 19.4889C6.08824 19.4889 5.54581 19.3508 5.05015 19.0968C5.78897 22.1795 7.99147 24.4401 10.6163 24.5401C9.01241 26.6787 6.76003 28.007 4.26768 28.007C2.71834 28.007 1.26254 27.4929 0 26.5926C3.03477 29.9635 6.99228 32 11.3208 32C20.8865 32 28.6395 22.0495 28.6395 9.77244C28.6395 9.09627 28.616 8.42811 28.5693 7.76794C30.1514 6.96574 31.4061 5.32733 32 3.27282V3.27082Z"
                  fill="white"
                />
              </svg>
            </i>

            <i>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3835 20.8744C13.3492 20.9667 13.3165 21.0438 13.2904 21.1209C11.7723 25.7262 11.6041 26.7488 10.0435 28.8877C9.29913 29.9041 8.46173 30.8674 7.53452 31.7889C7.43004 31.8926 7.3321 32.0278 7.12315 31.995C6.89461 31.9571 6.87667 31.7978 6.85218 31.6562C6.60242 30.2568 6.4653 28.8536 6.52407 27.4403C6.60242 25.5997 6.89622 24.9677 9.96025 14.9912C10.0043 14.8395 9.95537 14.7131 9.88844 14.5753C9.15549 13.0431 9.01021 11.4883 9.65011 9.91317C11.0377 6.51013 16.0182 6.24972 16.8899 9.05735C17.4269 10.7943 16.0067 13.0659 14.9163 16.426C14.0135 19.1982 18.2268 21.1677 21.8279 19.1451C25.1482 17.2805 26.4378 12.808 26.193 9.63885C25.7098 3.31947 16.7625 1.95421 11.085 3.98945C4.57659 6.31924 3.09764 12.5666 6.03598 15.421C6.40817 15.7838 7.11008 16.0063 6.98764 16.3741C6.79829 16.9455 6.63179 17.522 6.42774 18.0908C6.27593 18.5143 5.40424 18.6673 4.85248 18.4941C3.76856 18.1553 2.86745 17.6206 2.1345 16.9177C-0.361457 14.5247 -1.07481 9.79181 2.22429 5.78452C5.87925 1.3449 12.6782 -0.450167 18.8863 0.0946728C26.3007 0.748228 30.9873 4.67082 31.8639 9.12056C32.2639 11.1482 31.9766 16.1478 28.3004 19.6798C24.0724 23.7402 17.2196 24.0095 14.0576 21.5166C13.8144 21.3257 13.6185 21.102 13.3802 20.8732L13.3835 20.8744Z"
                  fill="white"
                />
              </svg>
            </i>

            <i>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.12297 6.33207C0.373777 5.62651 0 4.75358 0 3.71491C0 2.67625 0.373777 1.76392 1.12297 1.05836C1.87216 0.352786 2.83655 0 4.0194 0C5.20225 0 6.12784 0.352786 6.87541 1.05836C7.6246 1.76392 7.99838 2.65 7.99838 3.71491C7.99838 4.77983 7.6246 5.62651 6.87541 6.33207C6.12622 7.03764 5.17474 7.39042 4.0194 7.39042C2.86406 7.39042 1.87216 7.03764 1.12297 6.33207ZM7.36729 10.3784V32H0.631053V10.3784H7.36729Z"
                  fill="white"
                />
                <path
                  d="M29.7977 12.5132C31.2654 14.1294 32 16.3495 32 19.1751V31.6193H25.6003V20.0529C25.6003 18.6287 25.2362 17.5211 24.5081 16.7318C23.7799 15.9426 22.801 15.5488 21.5712 15.5488C20.3414 15.5488 19.3624 15.9442 18.6342 16.7318C17.9061 17.5211 17.542 18.6287 17.542 20.0529V31.6193H11.1051V10.3194H17.542V13.1449C18.1941 12.2031 19.0728 11.4598 20.1779 10.9117C21.2815 10.3653 22.5243 10.0913 23.9045 10.0913C26.3641 10.0913 28.3284 10.9002 29.7961 12.5148L29.7977 12.5132Z"
                  fill="white"
                />
              </svg>
            </i>
          </div>
        </div>
      </div>

      <div className="header-top">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>

        <div className="nav-bar-both">
          <ul className="nav-bar-top">
            <li className="nav-link">Home</li>
            <li className="nav-link">About</li>
            <li className="nav-link">Service </li>
            <li className="nav-link">Service </li>
            <li className="nav-link">Service </li>
            <li className="nav-link">Service </li>
            <li className="nav-link">Contact</li>
          </ul>

          <i>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 19L13 13M15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </i>
          <button className="header-button">
            <i>
              <svg
                width="17"
                height="11"
                viewBox="0 0 17 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.793 0.793031C10.9805 0.60556 11.2348 0.500244 11.5 0.500244C11.7652 0.500244 12.0195 0.60556 12.207 0.793031L16.207 4.79303C16.3945 4.98056 16.4998 5.23487 16.4998 5.50003C16.4998 5.76519 16.3945 6.0195 16.207 6.20703L12.207 10.207C12.0184 10.3892 11.7658 10.49 11.5036 10.4877C11.2414 10.4854 10.9906 10.3803 10.8052 10.1948C10.6198 10.0094 10.5146 9.75863 10.5123 9.49643C10.51 9.23423 10.6108 8.98163 10.793 8.79303L13.086 6.50003H1.5C1.23478 6.50003 0.98043 6.39467 0.792893 6.20714C0.605357 6.0196 0.5 5.76525 0.5 5.50003C0.5 5.23481 0.605357 4.98046 0.792893 4.79292C0.98043 4.60539 1.23478 4.50003 1.5 4.50003H13.086L10.793 2.20703C10.6055 2.0195 10.5002 1.76519 10.5002 1.50003C10.5002 1.23487 10.6055 0.980558 10.793 0.793031Z"
                  fill="white"
                />
              </svg>
            </i>
            <p>Free Estimate</p>
          </button>
        </div>
      </div>

      <div className="header-image-carousel">
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
          interval={3000}
          transitionTime={500}
          showStatus={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                className="custom-arrow custom-arrow-prev"
              >
                <i>
                  <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15L1 8L8 1"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                className="custom-arrow custom-arrow-next"
              >
                <i>
                  <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L8 8L1 15"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>
              </button>
            )
          }
        >
          <div>
            <img src={contentImage[2]} />
          </div>
          <div>
            <img src={contentImage[1]} />
          </div>
          <div>
            <img src={contentImage[0]} />
          </div>
        </Carousel>
      </div>

      <div className="safety-action">
        {safetyAndSecurity.map((i) => {
          return (
            <>
              <div className="safety-action-card">
                <div className="icon-for-safety">
                  <i>{i.Icon}</i>
                </div>
                <h4>{i.title}</h4>
                <div className="flex">
                  <i className="flex">
                    <svg
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.793 0.793031C10.9805 0.60556 11.2348 0.500244 11.5 0.500244C11.7652 0.500244 12.0195 0.60556 12.207 0.793031L16.207 4.79303C16.3945 4.98056 16.4998 5.23487 16.4998 5.50003C16.4998 5.76519 16.3945 6.0195 16.207 6.20703L12.207 10.207C12.0184 10.3892 11.7658 10.49 11.5036 10.4877C11.2414 10.4854 10.9906 10.3803 10.8052 10.1948C10.6198 10.0094 10.5146 9.75863 10.5123 9.49643C10.51 9.23423 10.6108 8.98163 10.793 8.79303L13.086 6.50003H1.5C1.23478 6.50003 0.98043 6.39467 0.792893 6.20714C0.605357 6.0196 0.5 5.76525 0.5 5.50003C0.5 5.23481 0.605357 4.98046 0.792893 4.79292C0.98043 4.60539 1.23478 4.50003 1.5 4.50003H13.086L10.793 2.20703C10.6055 2.0195 10.5002 1.76519 10.5002 1.50003C10.5002 1.23487 10.6055 0.980558 10.793 0.793031Z"
                        fill="#EC5C35"
                      />
                    </svg>
                  </i>
                  <p> Read More</p>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="about-content">
        <div className="about-content-left">
          <img src={aboutImg} alt="" />
        </div>
        <div className="about-content-right">
          <i>Dependable & Sincere Company</i>
          <h2>
            Best Choice For Your Commercial Residential Roof Installation
            Projects
          </h2>

          <p className="description">
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </p>
          <p className="description">
            empor incididunt ut labore et dolore magna aliquat enim adys minim
            veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor
            sit amet, Excepteur sint occaecat cupidatat non proident sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="description">
            tation ullamco laboris. Lorem ipsum dolor sit amet, Excepteur sint
            occaecat cupidatat non proident sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>

          <button className="header-button">
            <i>
              <svg
                width="17"
                height="11"
                viewBox="0 0 17 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.793 0.793031C10.9805 0.60556 11.2348 0.500244 11.5 0.500244C11.7652 0.500244 12.0195 0.60556 12.207 0.793031L16.207 4.79303C16.3945 4.98056 16.4998 5.23487 16.4998 5.50003C16.4998 5.76519 16.3945 6.0195 16.207 6.20703L12.207 10.207C12.0184 10.3892 11.7658 10.49 11.5036 10.4877C11.2414 10.4854 10.9906 10.3803 10.8052 10.1948C10.6198 10.0094 10.5146 9.75863 10.5123 9.49643C10.51 9.23423 10.6108 8.98163 10.793 8.79303L13.086 6.50003H1.5C1.23478 6.50003 0.98043 6.39467 0.792893 6.20714C0.605357 6.0196 0.5 5.76525 0.5 5.50003C0.5 5.23481 0.605357 4.98046 0.792893 4.79292C0.98043 4.60539 1.23478 4.50003 1.5 4.50003H13.086L10.793 2.20703C10.6055 2.0195 10.5002 1.76519 10.5002 1.50003C10.5002 1.23487 10.6055 0.980558 10.793 0.793031Z"
                  fill="white"
                />
              </svg>
            </i>
            <p>Free Estimate</p>
          </button>
        </div>
      </div>

      <div className="quality-repair">
        <div className="quality-quotes">
          <div className="quality-quotes-div1">
            <p>Dependable & Sincere Company</p>
            <h2>Quality & Reability With 100% Satisfaction </h2>
          </div>

          <div className="quality-quotes-div2">
            <p>
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea consequat duis aute irure dolor in reprehenderit in
              voluptate.ncididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea consequat duis aute irure dolor in reprehenderit in
              voluptate.
            </p>
          </div>
        </div>

        <div
          className="quality-repair-card-parent scroll-hide"
          {...events}
          ref={ref}
        >
          {[
            { title: "Insulation and Repair", image: aboutI },
            { title: "Insulation and Repair", image: aboutI },
            { title: "Insulation and Repair", image: aboutI },
            { title: "Insulation and Repair", image: aboutI },
            { title: "Insulation and Repair", image: aboutI },
            { title: "Insulation and Repair", image: aboutI },
            { title: "Insulation and Repair", image: aboutI },
            { title: "Insulation and Repair", image: aboutI },
            { title: "Insulation and Repair", image: aboutI },
            { title: "Insulation and Repair", image: aboutI },
            { title: "Insulation and Repair", image: aboutI },
          ].map((i) => {
            return (
              <div className="quality-repair-card">
                <div className="image-container-quality-repair">
                  <img
                    src={i.image}
                    alt=""
                    className="image-container-quality-repair-image"
                  />
                </div>
                <div className="quality-repair-card-content">
                  <h5>{i.title}</h5>
                  <p>
                    is nostrud exercitation ullamco laboris nisi ut aliquip exs
                    nostrud exercitation ullamco laboris nisi ut veniam quis n
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="get-in-touch-poster-parent">
        <div className="get-in-touch-poster">
          <img src={logo} alt="" />

          <h2>Proud to be serving the expertise you can trust</h2>

          <button className="header-button">
            <i>
              <svg
                width="17"
                height="11"
                viewBox="0 0 17 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.793 0.793031C10.9805 0.60556 11.2348 0.500244 11.5 0.500244C11.7652 0.500244 12.0195 0.60556 12.207 0.793031L16.207 4.79303C16.3945 4.98056 16.4998 5.23487 16.4998 5.50003C16.4998 5.76519 16.3945 6.0195 16.207 6.20703L12.207 10.207C12.0184 10.3892 11.7658 10.49 11.5036 10.4877C11.2414 10.4854 10.9906 10.3803 10.8052 10.1948C10.6198 10.0094 10.5146 9.75863 10.5123 9.49643C10.51 9.23423 10.6108 8.98163 10.793 8.79303L13.086 6.50003H1.5C1.23478 6.50003 0.98043 6.39467 0.792893 6.20714C0.605357 6.0196 0.5 5.76525 0.5 5.50003C0.5 5.23481 0.605357 4.98046 0.792893 4.79292C0.98043 4.60539 1.23478 4.50003 1.5 4.50003H13.086L10.793 2.20703C10.6055 2.0195 10.5002 1.76519 10.5002 1.50003C10.5002 1.23487 10.6055 0.980558 10.793 0.793031Z"
                  fill="white"
                />
              </svg>
            </i>
            <p>GET IN TOUCH</p>
          </button>
        </div>
      </div>

      <div className="process">
        <div className="process-content-1">
          <div className="process-content-left">
            <img
              src={
                "https://html.tonatheme.com/2020/Rofalco/assets/images/resource/image-15.jpg"
              }
              alt=""
            />
          </div>
          <div className="process-content-right">
            <p className="process-content-1-sub-header">
              Dependable & Sincere Company
            </p>
            <h2>Rofalco - Exceptional Roofing Services</h2>
            <p>
              Magna aliqa enim sed ipsum nisi ainy veniam quis nostrul aliqua
              enim lorem ipsum gui dolor sit amet tempor. Lorem ipsum dolor sit
              ametys consecteturadipisicing elit, sed eiusmod tempor incididunt
              ut labore dolore magna aliq sed ipsum ua dolor exercitation
              ullamco.
            </p>
            <button className="header-button">
              <i>
                <svg
                  width="17"
                  height="11"
                  viewBox="0 0 17 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.793 0.793031C10.9805 0.60556 11.2348 0.500244 11.5 0.500244C11.7652 0.500244 12.0195 0.60556 12.207 0.793031L16.207 4.79303C16.3945 4.98056 16.4998 5.23487 16.4998 5.50003C16.4998 5.76519 16.3945 6.0195 16.207 6.20703L12.207 10.207C12.0184 10.3892 11.7658 10.49 11.5036 10.4877C11.2414 10.4854 10.9906 10.3803 10.8052 10.1948C10.6198 10.0094 10.5146 9.75863 10.5123 9.49643C10.51 9.23423 10.6108 8.98163 10.793 8.79303L13.086 6.50003H1.5C1.23478 6.50003 0.98043 6.39467 0.792893 6.20714C0.605357 6.0196 0.5 5.76525 0.5 5.50003C0.5 5.23481 0.605357 4.98046 0.792893 4.79292C0.98043 4.60539 1.23478 4.50003 1.5 4.50003H13.086L10.793 2.20703C10.6055 2.0195 10.5002 1.76519 10.5002 1.50003C10.5002 1.23487 10.6055 0.980558 10.793 0.793031Z"
                    fill="white"
                  />
                </svg>
              </i>
              <p>LEARN MORE</p>
            </button>
          </div>
        </div>

        <div className="process-content-1">
          <div className="process-content-left">
            <p className="process-content-1-sub-header">
              Dependable & Sincere Company
            </p>
            <h2>Rofalco - Exceptional Roofing Services</h2>
            <p>
              Magna aliqa enim sed ipsum nisi ainy veniam quis nostrul aliqua
              enim lorem ipsum gui dolor sit amet tempor. Lorem ipsum dolor sit
              ametys consecteturadipisicing elit, sed eiusmod tempor incididunt
              ut labore dolore magna aliq sed ipsum ua dolor exercitation
              ullamco.
            </p>
            <button className="header-button">
              <i>
                <svg
                  width="17"
                  height="11"
                  viewBox="0 0 17 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.793 0.793031C10.9805 0.60556 11.2348 0.500244 11.5 0.500244C11.7652 0.500244 12.0195 0.60556 12.207 0.793031L16.207 4.79303C16.3945 4.98056 16.4998 5.23487 16.4998 5.50003C16.4998 5.76519 16.3945 6.0195 16.207 6.20703L12.207 10.207C12.0184 10.3892 11.7658 10.49 11.5036 10.4877C11.2414 10.4854 10.9906 10.3803 10.8052 10.1948C10.6198 10.0094 10.5146 9.75863 10.5123 9.49643C10.51 9.23423 10.6108 8.98163 10.793 8.79303L13.086 6.50003H1.5C1.23478 6.50003 0.98043 6.39467 0.792893 6.20714C0.605357 6.0196 0.5 5.76525 0.5 5.50003C0.5 5.23481 0.605357 4.98046 0.792893 4.79292C0.98043 4.60539 1.23478 4.50003 1.5 4.50003H13.086L10.793 2.20703C10.6055 2.0195 10.5002 1.76519 10.5002 1.50003C10.5002 1.23487 10.6055 0.980558 10.793 0.793031Z"
                    fill="white"
                  />
                </svg>
              </i>
              <p>LEARN MORE</p>
            </button>
          </div>
          <div className="process-content-right">
            <img
              src={
                "https://html.tonatheme.com/2020/Rofalco/assets/images/resource/image-15.jpg"
              }
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="feature-project">
        <div className="feature-project-top-content">
          <p className="">Dependable & Sincere Company</p>
          <h2>Featured Projects</h2>
          <div className="flex-btwn">
            <p>
              Incididunt ut labore et dolore magna aliqua enim ad minim veniam
              quis nostrud exercitation ullamco laboris nisut aliquip.
            </p>

            <ul className="flex">
              <li className="active">All</li>
              <li>Residential</li>
              <li> Commercial</li>
            </ul>
          </div>
        </div>

        <div className="feature-project-bottom-content">
          {[
            {
              image:
                "https://html.tonatheme.com/2020/Rofalco/assets/images/gallery/image-13.jpg",
              title: "insulation",
            },
            {
              image:
                "https://html.tonatheme.com/2020/Rofalco/assets/images/gallery/image-14.jpg",
              title: "insulation",
            },
            {
              image:
                "https://html.tonatheme.com/2020/Rofalco/assets/images/gallery/image-15.jpg",
              title: "insulation",
            },
            {
              image:
                "https://html.tonatheme.com/2020/Rofalco/assets/images/gallery/image-16.jpg",
              title: "insulation",
            },
            {
              image:
                "https://html.tonatheme.com/2020/Rofalco/assets/images/gallery/image-17.jpg",
              title: "insulation",
            },
          ].map((o) => {
            return (
              <>
                <img src={o.image} alt="" />
              </>
            );
          })}
        </div>
      </div>

      <div className="poster">
        <div className="flex poster-for-contact">
          <i>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.88 2C30.7166 2 37.88 9.16344 37.88 18M22.88 9C27.2983 9 30.88 12.5817 30.88 17"
                stroke="#ec5a31"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1965 7.42446L13.3912 5.6125C12.8646 4.42775 12.6014 3.83536 12.2076 3.38203C11.7142 2.81388 11.0709 2.39588 10.3514 2.17569C9.77717 2 9.12892 2 7.83242 2C5.93582 2 4.98751 2 4.19146 2.36458C3.25374 2.79404 2.40687 3.72656 2.06946 4.7012C1.78302 5.52859 1.86507 6.37886 2.02916 8.0794C3.77582 26.1804 13.6996 36.1042 31.8006 37.8508C33.5011 38.0149 34.3514 38.097 35.1788 37.8105C36.1534 37.4731 37.086 36.6263 37.5154 35.6885C37.88 34.8925 37.88 33.9442 37.88 32.0476C37.88 30.7511 37.88 30.1028 37.7043 29.5287C37.4841 28.8091 37.0661 28.1659 36.498 27.6724C36.0447 27.2787 35.4522 27.0154 34.2675 26.4888L32.4555 25.6835C31.1725 25.1132 30.531 24.8281 29.8791 24.7661C29.2552 24.7068 28.6261 24.7943 28.0422 25.0217C27.432 25.2593 26.8926 25.7088 25.814 26.6076C24.7403 27.5024 24.2034 27.9498 23.5475 28.1894C22.966 28.4018 22.1971 28.4805 21.5846 28.3903C20.8937 28.2884 20.3647 28.0057 19.3066 27.4403C16.0144 25.6809 14.1991 23.8656 12.4397 20.5734C11.8743 19.5153 11.5916 18.9863 11.4897 18.2954C11.3995 17.6829 11.4782 16.914 11.6906 16.3325C11.9302 15.6766 12.3776 15.1397 13.2724 14.066C14.1712 12.9874 14.6207 12.448 14.8583 11.8378C15.0857 11.2539 15.1732 10.6248 15.1139 10.001C15.0519 9.34904 14.7668 8.70752 14.1965 7.42446Z"
                stroke="#ec5a31"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </i>
          <h2>
            Need Emergency Repair? Call Us 24/7 For Expert Help 1500.963.3
          </h2>
        </div>
      </div>

      <div className="consulation">
        <div className="consulation-both">
          <div className="consulation-left">
            <p>Dependable & Sincere Company</p>
            <h2>Words From Our Loving Customers</h2>
            <div className="consulation-customer-review">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                quaerat illum veritatis cumque quo natus voluptatem, ipsa amet
                tenetur aliquam iure ea officia explicabo distinctio voluptatum
                esse exercitationem quis atque?
              </p>
              <div className="flex-start-start consulation-customer-profile">
                <img
                  src={
                    "https://html.tonatheme.com/2020/Rofalco/assets/images/resource/author-3.jpg"
                  }
                  alt=""
                />
                <div className="flex-flex-start column">
                  <h4 className="customer-name">Jhon anie</h4>
                  <p className="customer-description">Building owner</p>
                </div>
              </div>
            </div>
          </div>

          <div className="consulation-right">
            <div className="consulation-form">
              <h2>Get Free Consultation</h2>
              <p>
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                duis aute irure dolor in reprehenderit in voluptate.
              </p>

              <div className="flex">
                <input type="text" placeholder="Name" name="" id="" />
                <input type="text" placeholder="Email" name="" id="" />
                <input type="text" placeholder="Phone" name="" id="" />
                <input type="text" placeholder="City" name="" id="" />
              </div>
              <input type="text" placeholder="SUbject / Discuss about" name="" id="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetalHome;
