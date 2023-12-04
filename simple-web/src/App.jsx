import './assets/index.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import { Login } from './components/Login'
import { SignUp } from './components/SignUp';
import { Dashboard } from './components/Dashboard';




function App() {
  return (
    <>
     <BrowserRouter >
      <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="/sign-up" element={<SignUp/>} /> 
        <Route path="/dashboard" element={<Dashboard/>} /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
