import { useContext, useState } from "react";
import Login from "./Pages/Login"
import { ToastContainer, toast } from 'react-toastify';
import { AdminContext } from "./Context/AdminContext";

function App() {
  
  const {aToken} = useContext(AdminContext)

  return aToken ? (
    <div>
      <ToastContainer/>
    </div>
  ) : (
    <>
      <Login/>
      <ToastContainer/>

    </>
  )
}

export default App
