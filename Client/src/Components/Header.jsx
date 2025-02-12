import React from "react";
import prof1 from "../assets/prof1.jpg";
import prof2 from "../assets/prof2.jpg";
import prof3 from "../assets/prof3.jpg";
import prof4 from "../assets/prof4.jpg";
import hederIMAGE from "../assets/doc.png";

import { FaLongArrowAltRight } from "react-icons/fa";

function Header() {
  return (
    <div className="flex flex-col flex-wrap px-6 rounded-3xl md:flex-row md:px-10 lg:px-20 bg-gradient-to-r from-purple-400 via-purple-700 to-purple-950">
      {/*left side------------------------------------------------------------------ */}
      <div className="flex flex-col items-start justify-center gap-4 py-10 m-auto md:w-1/2 md:py-[10vw] md:mb-[-30px] ">
        <p className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl md:leading-tight lg:leading-tight ">
          Give your Career a Jumpstart
        </p>

        <div className="flex flex-col gap-5 text-sm font-light text-white md:items-center md:flex-row md:gap-20">
          <div className="flex ">
            <img
              className="-mx-1 border-2 border-white rounded-full w-9"
              src={prof2}
              alt="prof"
            />
            <img
              className="-mx-1 border-2 border-white rounded-full w-9"
              src={prof1}
              alt="prof"
            />
            <img
              className="-mx-1 border-2 border-white rounded-full w-9"
              src={prof3}
              alt="prof"
            />
            <img
              className="-mx-1 border-2 border-white rounded-full w-9"
              src={prof4}
              alt="prof"
            />
          </div>
          <div>
            <p>
              Job seekers with the right opportunities and helps companies find
              the best talent efficiently.
            </p>
          </div>
        </div>
        <div className="flex">
          <a
            className="flex items-center gap-2 px-8 py-3 m-auto text-sm text-gray-600 transition-all duration-300 bg-white rounded-full md:m-0 hover:scale-105 hover:shadow-lg"
            href="#speciality"
          >
            Find jobs <FaLongArrowAltRight className="text-gray-600" />
          </a>
        </div>
      </div>
      {/*right side------------------------------------------------------------------ */}
      <div className="relative md:w-1/2">
        {/*<img
          className="bottom-0 w-full h-auto rounded-lg md:absolute "
          src={hederIMAGE}
          alt="Heder Image"
        />*/}
      </div>
    </div>
  );
}

export default Header;
