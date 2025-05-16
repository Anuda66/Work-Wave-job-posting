import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { IoBagAddSharp } from "react-icons/io5";
import { FaWallet } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { RiAddBoxFill } from "react-icons/ri";
import { MdWorkHistory } from "react-icons/md";


function SideBar() {
//FaWallet
    const { Ctoken } = useContext(AppContext);
    
  return (
    <div className="min-h-screen bg-white birder-r">
      {Ctoken && (
        <ul className="mt-5 text-gray-700">
          <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-purple-100 border-r-4 border-purple-600' : ''}`} to={'/'}>
            <MdSpaceDashboard className="text-xl text-gray-500"/>
            <p>Dashboard</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-purple-100 border-r-4 border-purple-600' : ''}`} to={'/addJobs'}>
            <RiAddBoxFill  className="text-xl text-gray-500"/>
            <p>Add Job</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-purple-100 border-r-4 border-purple-600' : ''}`} to={'/allJobs'}>
            <MdWorkHistory  className="text-xl text-gray-500"/>
            <p>All Job</p>
          </NavLink>

          <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-purple-100 border-r-4 border-purple-600' : ''}`} to={'/allUser'}>
            <ImUsers  className="text-xl text-gray-500"/>
            <p>Candidates</p>
          </NavLink>
        </ul>
      )}
    </div>
  )
}

export default SideBar
