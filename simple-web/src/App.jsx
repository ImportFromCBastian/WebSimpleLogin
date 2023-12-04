import './assets/index.css'
import { Login } from './components/Login'
import { SignUp } from './components/SignUp';
import { BrowserRouter, Routes,Route } from 'react-router-dom'



function App() {
  return (
    <>
     <BrowserRouter >
      <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="/sign-up" element={<SignUp/>} /> 
        <Route path="/sign-up" element={<Dashboard/>} /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
