import { useContext } from "react";
import Login from "./Pages/Login"
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from "./Context/AdminContext";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Admin/Dashboard";
import AllJobs from "./Pages/Admin/AllJobs";
import AddJobs from "./Pages/Admin/AddJobs";

function App() {
  
  const {aToken} = useContext(AdminContext)

  return aToken ? (
    <div className="bg-[#f8f9fd] h-screen">
      <ToastContainer/>
      <Navbar/>
      <div className="flex items-start">
        <SideBar/>
        <Routes>
          <Route path="/" element={<></>}/>
          <Route path="/admin-dashborad" element={<Dashboard/>}/>
          <Route path="/all-jobs" element={<AllJobs/>}/>
          <Route path="/add-jobs" element={<AddJobs/>}/>
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login/>
      <ToastContainer/>

    </>
  )
}

export default App
