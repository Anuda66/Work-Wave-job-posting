import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
function MyAppointment() {
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <p className="pb-3 mt-12 font-medium border text-zinc-700-b">
        My Appointment
      </p>
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b">
              <div>
                <img className="w-32 bg-green-100 " src='' alt="" />
              </div>
              <div className="flex-1 text-sm text-zinc-600 ">
                <p className="font-semibold text-netural-800">{item.name}</p>
                <p>{item.specility}</p>
                <p>Address : </p>
                {/*<p>{item.address.line1}</p>*/}
                {/*<p>{item.address.line2}</p>*/}
                <p>
                  <span className="font-semibold text-netural-800">
                    Date & Time :{" "}
                  </span>
                  11.10.2025 | 8.30 am
                </p>
              </div>
              <div></div>
              <div className="flex flex-col justify-end gap-2 ">
                <button className="py-2 text-sm text-center transition-all duration-300 border rounded-lg text-stone-500 sm:min-w-48 hover:text-white hover:bg-green-400 hover:shadow-lg">
                  Pay Online
                </button>
                <button className="py-2 text-sm text-center border rounded-lg text-stone-500 sm:min-w-48 hover:text-white hover:bg-red-500 hover:shadow-lg">
                  Cancel Appintment
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
