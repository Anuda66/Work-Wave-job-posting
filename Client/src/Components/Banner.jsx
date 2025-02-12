import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  return (
    <div className="flex px-6 my-20 bg-purple-600 rounded-3xl sm:px-10 md:px-14 lg:px-12 md:mx-10">
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        {/*  left side -------------- */}
        <div className="text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-5xl">
         
          <h1 className="mt-4 mb-4">One stop to plan, manage and land your dream career</h1>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="flex items-center gap-2 px-8 py-3 m-auto text-sm text-gray-600 transition-all duration-300 bg-white rounded-full md:m-0 hover:scale-105 hover:shadow-lg"
        >
          Create account
        </button>
      </div>
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative ">
        {/*  right side -------------- */}
        <img
          className="absolute bottom-0 right-0 max-w-md md:h-[350px] lg:h-[450px]"
          src={assets.image3}
          alt="Image"
        />
      </div>
    </div>
  );
}

export default Banner;
