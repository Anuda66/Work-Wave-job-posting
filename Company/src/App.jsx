import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'

function App() {

  return (
    <div>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>

  )
}

export default App
