import React, { useContext } from "react";
import { AdminContext } from "../Context/AdminContext";
import { NavLink } from "react-router-dom";
import { Bs1Square } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { IoBagAddSharp } from "react-icons/io5";
import { FaWallet } from "react-icons/fa6";

function SideBar() {
  const { aToken } = useContext(AdminContext);

  return (
    <div className="min-h-screen bg-white birder-r">
      {aToken && (
        <ul className="mt-5 text-gray-700">
          <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-purple-100 border-r-4 border-purple-600' : ''}`} to={'/admin-dashborad'}>
            <MdSpaceDashboard className="text-xl text-gray-500"/>
            <p>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-purple-100 border-r-4 border-purple-600' : ''}`} to={'/all-jobs'}>
            <IoBagAddSharp className="text-xl text-gray-500"/>
            <p>All Jobs</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-purple-100 border-r-4 border-purple-600' : ''}`} to={'/add-jobs'}>
            <FaWallet className="text-xl text-gray-500"/>
            <p>Add Job</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
}

export default SideBar;
