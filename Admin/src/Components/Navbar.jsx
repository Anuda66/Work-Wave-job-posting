import React, { useContext } from "react";
import { AdminContext } from "../Context/AdminContext";
import logo from '../assets/logo.png'
import {useNavigate} from 'react-router-dom'

function Navbar() {
  
  const { aToken, setAToken } = useContext(AdminContext);

  const navigate = useNavigate()
  
  const logout = () => {
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-purple-600 sm:px-10">
      <div className="flex items-center gap-8 text-xs">
        <img className="w-24 cursor-pointer" src={logo} alt="logo" />
        <p className="border px-2.5 py-0.5 rounded-full border-white text-white">{aToken ? "Admin" : "Company"}</p>
      </div>
      <button onClick={logout} className="px-10 py-2 font-light text-purple-600 transition duration-300 ease-in-out delay-150 bg-white rounded-full cursor-pointer md:block hover:-translate-y-1 hover:scale-110 hover:shadow-lg">Logout</button>
    </div>
  );
}

export default Navbar;
