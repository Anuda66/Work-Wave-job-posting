import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

function SpacalityMeny() {
  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-700 "
      id="speciality"
    >
      <h1 className="text-3xl font-medium">Latest Job Openings</h1>
      <p className="text-sm text-center sm:w-1/3">
        Find your dream job & earn from world leading brands.
      </p>

      <div className="flex w-full gap-4 pt-5 overflow-scroll sm:justify-center ">
        {specialityData.map((item, index) => (
          <div className="flex justify-center h-20 px-3 py-8 border-2 border-purple-700 rounded-2xl hover:shadow-2xl">
            <Link
              onClick={() => scrollTo(0, 0)}
              className="flex flex-col items-center flex-shrink-0 text-xs cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
              to={`/jobs/${item.specility}`}
            >
              {/*<img className="w-16 mb-2 sm:w-24" src={item.image} alt="" />*/}
              <p className="text-lg font-bold">{item.specility}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpacalityMeny;
