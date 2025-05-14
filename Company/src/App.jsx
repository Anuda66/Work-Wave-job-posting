import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import Navbar from './Components/Navbar'


function App() {

  return (
    <div className="bg-[#f8f9fd] ">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>

  )
}

export default App
