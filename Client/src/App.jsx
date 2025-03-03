import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import  About from './pages/About'
import  Contact from './pages/Contact'
import Login from './pages/Login'
import MyAppoiment from './Pages/MyAppointment'
import Myprofile from './pages/Myprofile'
import Singup from './pages/Singup'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import CVFormat from './Pages/CVFormat'
import Jobs from './Pages/Jobs'
import ApplyToJob from './Pages/ApplyToJob'
import GoToTop from './Components/GoToTop'
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
         
          <Route  path="/login" element={<Login />} />
          <Route  path="/myAppoiment" element={<MyAppoiment />} />
          <Route  path="/myprofile" element={<Myprofile />} />
          <Route  path="/singup" element={<Singup />} />
          <Route  path="/CVFormat" element={<CVFormat />} />
         
          <Route  path="/jobs" element={<Jobs />} />
          <Route  path="/jobs/:JobTitle" element={<Jobs />} />
          <Route  path="/AppliedToJob/:jobId" element={<ApplyToJob />} />

        </Routes>
        </div> 
        <GoToTop/>
        <Footer/>
      </div>
  )
}

export default App
