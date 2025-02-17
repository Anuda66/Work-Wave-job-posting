import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import  About from './pages/About'
import  Contact from './pages/Contact'
import Doctor from './Pages/Doctor'
import Login from './pages/Login'
import MyAppoiment from './Pages/MyAppointment'
import Myprofile from './pages/Myprofile'
import Singup from './pages/Singup'
import Appintment from './Pages/Appintment'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import CVFormat from './Pages/CVFormat'
import Jobs from './Pages/Jobs'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div > 
        <Nav/>
        <div className='mx-4 sm:mx-[10%]'>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/contact" element={<Contact />} />
          <Route  path="/doctor" element={<Doctor />} />
          <Route  path="/doctor/:specialty" element={<Doctor />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/myAppoiment" element={<MyAppoiment />} />
          <Route  path="/myprofile" element={<Myprofile />} />
          <Route  path="/singup" element={<Singup />} />
          <Route  path="/CVFormat" element={<CVFormat />} />
          <Route  path="/appintment/:docId" element={<Appintment />} />
          <Route  path="/jobs" element={<Jobs />} />

        </Routes>
          
        </div> 
        <Footer/>
      </div>
  )
}

export default App
