import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

function Myprofile() {
  
  const {userData, setUserData} = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="flex flex-col max-w-lg gap-2 text-sm ">
      <img
        className="rounded-full w-36"
        src={userData.image}
        alt="Profile Image"
      />
      {isEdit ? (
        <input
          className="mt-4 text-3xl font-medium bg-gray-50 max-w-60"
          value={userData.name}
          type="text"
          onChange={(e) =>
          setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="mt-4 text-3xl font-medium text-netural-800">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="mt-3 underline text-netural-500">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-netural-700">
          <p>Email id : </p>
          <p>{userData.email}</p>
          <p>Phone : </p>
          {isEdit ? (
            <input
              value={userData.phone}
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>location : </p>
          {isEdit ? (
            <p>
              <input
              value={userData.location}
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, location: e.target.value }))
              }
            />
              <br />
              
            </p>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="mt-3 underline text-netural-500">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-netural-700">
          <p>Gender :</p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}

          <p>Job Field :</p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, job: e.target.value }))
              }
              value={userData.jobTitel}
            >
              <option value="Front-End Engineer">Front-End Engineer</option>
              <option value="Back-End Engineer">Back-End Engineer</option>
              <option value="Full Stack Engineer">Full Stack Engineer</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="QA Engineer">QA Engineer</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}

          <p>Birthday : </p>
          {isEdit ? (
            <input
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            className="px-8 py-2 transition-all border border-purple-800 rounded-full hover:text-white hover:bg-purple-800 hover:shadow-lg"
            onClick={() => setIsEdit(false)}
          >
            Save Changes
          </button>
        ) : (
          <button
            className="px-8 py-2 transition-all border border-purple-800 rounded-full hover:text-white hover:bg-purple-800 hover:shadow-lg"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default Myprofile;
