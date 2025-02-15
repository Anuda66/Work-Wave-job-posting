import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

function Doctor() {
  const navigate = useNavigate();

  const { specialty } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (specialty) {
      setFilterDoc(doctors.filter((doc) => doc.specility === specialty));
    } else {
      setFilterDoc(doctors);
    }
  };
  useEffect(() => {
    applyFilter();
  }, [doctors, specialty]);

  return (
    <div>
      <p className="text-gray-600">Browse through the Job specialist.</p>
      <div className="flex flex-col gap-4 mt-10 items-s tart sm:flex-row">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              specialty === "General physician"
                ? navigate("/doctor")
                : navigate("/doctor/General physician")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-purple-800 hover:text-white  duration-500`}
          >
            QA Engineer
          </p>
          <p
            onClick={() =>
              specialty === "Gynecologist"
                ? navigate("/doctor")
                : navigate("/doctor/Gynecologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-purple-800 hover:text-white  duration-500`}
          >
            Front-End Engineer
          </p>
          <p
            onClick={() =>
              specialty === "Dermatologist"
                ? navigate("/doctor")
                : navigate("/doctor/Dermatologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-purple-800 hover:text-white  duration-500`}
          >
           Back-End Engineer
          </p>
          <p
            onClick={() =>
              specialty === "Pediatricians"
                ? navigate("/doctor")
                : navigate("/doctor/Pediatricians")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-purple-800 hover:text-white  duration-500`}
          >
            Full Stack Engineer
          </p>
          <p
            onClick={() =>
              specialty === "Neurologist"
                ? navigate("/doctor")
                : navigate("/doctor/Neurologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-purple-600 hover:text-white  duration-500`}
          >
           Software Engineer
          </p>
        </div>
        <div className="grid w-full gap-4 grid-cols-auto gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appintment/${item._id}`)}
              className="overflow-hidden border border-purple-800 cursor-pointer rounded-xl hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
             
              <div className="p-4">
                
                <p className="pb-3 text-lg font-medium text-gray-800 gray-800">
                  {item.JobTitle}
                </p>
                <p className="pb-3 text-sm text-gray-600">{item.dis}</p>
                <p className="text-sm font-bold text-purple-600">{item.techlnolegy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctor;
