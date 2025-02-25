import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <div className="fixed z-50 flex items-center justify-end md:bottom-2 right-2 bottom-12">
            
                
            <div className="flex items-center justify-between w-8 h-8 p-2 mx-20 border-2 border-gray-500 rounded-full bg-purple-600 hover:shadow-purple-500 shadow-[0_0_22px_rgb(0,0,0,0.15)] transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 cursor-pointer">
              <FaArrowUp className="text-xl text-white" />
            </div>
            </div>
          </div>
        
      )}
    </div>
  );
}

export default GoToTop;