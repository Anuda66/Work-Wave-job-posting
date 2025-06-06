import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { AppContext } from "../Context/AppContext";

function Nav() {
  const navigate = useNavigate();
  const {token, setToken, userData} = useContext(AppContext)
  const [showMenu, setShowMenu] = useState(true);

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
     navigate("/")
  }
  

  return (
    <div className="bg-purple-500">
      <div className="flex items-center justify-between px-10 py-4 mb-5 text-sm border-b">
        <img
          onClick={() => navigate("/")}
          className="w-24 cursor-pointer"
          src={logo}
          alt="logo"
        />
        <ul className="items-start hidden gap-5 font-medium md:flex ">
          <NavLink to={"/"}>
            <li className="py-1 text-white">HOME</li>
            <hr className="hidden w-3/5 h-1 m-auto bg-white border-none rounded-full outline-none" />
          </NavLink>
          <NavLink to={"/jobs"}>
            <li className="py-1 text-white"> JOBS</li>
            <hr className="hidden w-3/5 h-1 m-auto bg-white border-none rounded-full outline-none" />
          </NavLink>
          <NavLink to={"/candidates"}>
            <li className="py-1 text-white"> CANDIDATES </li>
            <hr className="hidden w-3/5 h-1 m-auto bg-white border-none rounded-full outline-none" />
          </NavLink>
          <NavLink to={"/about"}>
            <li className="py-1 text-white">ABOUT</li>
            <hr className="hidden w-3/5 h-1 m-auto bg-white border-none rounded-full outline-none" />
          </NavLink>
          <NavLink to={"/contact"}>
            <li className="py-1 text-white">CONTACT</li>
            <hr className="hidden w-3/5 h-1 m-auto bg-white border-none rounded-full outline-none" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-4">
          {token && userData  ? (
            <div className="relative flex items-center gap-2 cursor-pointer group">
              <img
                className="rounded-full w-9"
                src={userData.image}
                alt="profile image"
              />
              <MdOutlineArrowDropDown className="text-white"/>
              <div className="absolute top-0 right-0 z-20 hidden text-base font-medium text-gray-500 pt-14 group-hover:block">
                <div className="flex flex-col gap-4 p-4 bg-white border rounded-lg shadow-lg min-w-48">
                  <p
                    onClick={() => navigate("/myprofile")}
                    className="cursor-pointer hover:text-black"
                  >
                    My Profile
                  </p>
                  <hr />
                  <p
                    onClick={() => navigate("/myjobs")}
                    className="cursor-pointer hover:text-black"
                  >
                    My Jobs
                  </p>
                  <hr />
                  <p
                    onClick={() => navigate("/cvformat")}
                    className="cursor-pointer hover:text-black"
                  >
                    CV Format
                  </p>
                  <hr />
                  <p
                    onClick={logout}
                    className="cursor-pointer hover:text-black"
                  >
                    LogOut
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/Login")}
              className="hidden px-8 py-3 font-light transition duration-300 ease-in-out delay-150 bg-white rounded-full text-purple-700r md:block hover:-translate-y-1 hover:scale-110 hover:bg-purple-700 hover:shadow-lg hover:text-white"
            >
              Create Account
            </button>
          )}
          <AiOutlineMenuFold
            onClick={() => setShowMenu(true)}
            className="w-auto text-white h-7 md:hidden"
          />
          {/* mobile menu -----------------------*/}
          <div
            className={`${
              showMenu ? "fixed w-full " : "h-0 w-0"
            } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
          >
            <div className="flex items-center justify-between px-10 py-10 ">
              <p className="text-xl font-bold text-purple-700">WorkWave</p>
              <RxCross1 className="text-xl " onClick={() => setShowMenu(false)} />
            </div>
            <ul className="flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium">
              <NavLink onClick={()=>setShowMenu(false)} to={"/"} >
                <li className="py-1">HOME</li>
                <hr className="hidden w-3/5 h-1 m-auto bg-purple-700 border-none outline-none" />
              </NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to={"/jobs"}>
                <li className="py-1">JOBS</li>
                <hr className="hidden w-3/5 h-1 m-auto bg-purple-700 border-none outline-none" />
              </NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to={"/candidates"}>
                <li className="py-1">CANDIDATES</li>
                <hr className="hidden w-3/5 h-1 m-auto bg-purple-700 border-none outline-none" />
              </NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to={"/about"}>
                <li className="py-1">ABOUT</li>
                <hr className="hidden w-3/5 h-1 m-auto bg-purple-700 border-none outline-none" />
              </NavLink>
              <NavLink onClick={()=>setShowMenu(false)} to={"/contact"}>
                <li className="py-1">CONTACT</li>
                <hr className="hidden w-3/5 h-1 m-auto bg-purple-700 border-none outline-none" />
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
