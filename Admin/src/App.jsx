import { useContext } from "react";
import Login from "./Pages/Login"
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from "./Context/AdminContext";
import Navbar from "./Components/Navbar";

function App() {
  
  const {aToken} = useContext(AdminContext)

  return aToken ? (
    <div className="bg-[#f8f9fd]">
      <ToastContainer/>
      <Navbar/>
    </div>
  ) : (
    <>
      <Login/>
      <ToastContainer/>

    </>
  )
}

export default App
