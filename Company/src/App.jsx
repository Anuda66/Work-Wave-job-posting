import { useContext } from "react";
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Navbar from './Components/Navbar'
import SideBar from './Components/SideBar'
import AddJobs from './Pages/AddJobs'
import AllJobs from './Pages/AllJobs'
import { AppContext } from './Context/AppContext'
import { ToastContainer, toast } from 'react-toastify';
import AllUser from "./Pages/AllUser";

function App() {

  const { Ctoken } = useContext(AppContext)

  return Ctoken ? (
    <div className="bg-[#f8f9fd] ">
      <ToastContainer/>
      <Navbar />
      <div className="flex items-start">
        <SideBar />
        <Routes>
         
          <Route path="/" element={<Dashboard />} />
          <Route path="/addJobs" element={<AddJobs />} />
          <Route path="/allJobs" element={<AllJobs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/allUser" element={<AllUser />} />
        </Routes>
      </div>
    </div>

  ): (
    <>
      <Login/>
      <ToastContainer/>

    </>
  )
}

export default App
