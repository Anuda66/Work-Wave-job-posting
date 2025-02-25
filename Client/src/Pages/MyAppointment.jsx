import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";


function MyAppointment() {
  const { jobs } = useContext(AppContext);

  return (
    <div>
      <p className="pb-3 mt-12 text-xl font-medium">
        Applied Jobs
      </p>
      <div>
        {jobs.slice(0, 3).map((item, index) => (
          <div key={index}>
            <div className="grid gap-4 py-2 border-b grid-rows sm:flex sm:gap-6">
              <div className="flex-1 text-sm text-zinc-600 ">
               
                <div className="flex gap-10">
                  <p>{item.JobTitle}</p>
                  <p className="text-purple-700">{item.techlnolegy}</p>
                </div>
                <p className="text-sm text-gray-400">{item.companyName}</p>
              </div>
              <div></div>
              <div className="flex flex-col justify-end gap-2 ">
                <button className="py-2 text-sm text-center text-white bg-red-400 border rounded-lg sm:min-w-48 hover:text-white hover:bg-red-500 hover:shadow-lg">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyAppointment;
