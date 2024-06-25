import {Toaster} from 'react-hot-toast'
import { Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import { ACCESS_TOKEN } from './constants'
import ProtectedRoute from './Components/ProtectedRoute'
import { useAuthContext } from './context/useAuthContext'

function App() {
  const Logout = () => {
    localStorage.clear()
    return <Navigate to={"/login"} />
  }

  const RegisterAndLogout = () => {
    localStorage.clear()
    return <Signup />

  }
  return (
    <>
      <div><Toaster/></div>
      <div className="p-6 h-screen flex items-center justify-center">
        <Routes>
          <Route path='/logout' element={<Logout />} />
          <Route 
            path='/'
            element={<ProtectedRoute children={<Home />}/>}
          />
          <Route path='/signup' element={<RegisterAndLogout />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App