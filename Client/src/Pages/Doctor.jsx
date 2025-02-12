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
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col gap-4 mt-10 items-s tart sm:flex-row">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() =>
              specialty === "General physician"
                ? navigate("/doctor")
                : navigate("/doctor/General physician")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-green-500 hover:text-white  duration-500`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              specialty === "Gynecologist"
                ? navigate("/doctor")
                : navigate("/doctor/Gynecologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-green-500 hover:text-white  duration-500`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              specialty === "Dermatologist"
                ? navigate("/doctor")
                : navigate("/doctor/Dermatologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-green-500 hover:text-white  duration-500`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              specialty === "Pediatricians"
                ? navigate("/doctor")
                : navigate("/doctor/Pediatricians")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-green-500 hover:text-white  duration-500`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              specialty === "Neurologist"
                ? navigate("/doctor")
                : navigate("/doctor/Neurologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:bg-green-500 hover:text-white  duration-500`}
          >
            Neurologist
          </p>
        </div>
        <div className="grid w-full gap-4 grid-cols-auto gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appintment/${item._id}`)}
              className="overflow-hidden border border-green-500 cursor-pointer rounded-xl hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-green-100 " src={item.image} alt="DocImage" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full "></p>
                  <p>Available</p>
                </div>
                <p className="text-lg font-medium text-gray-800 gray-800">
                  {item.name}
                </p>
                <p className="text-sm text-gray-600">{item.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctor;
