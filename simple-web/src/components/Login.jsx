import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import "../assets/index.css"

export const Login = () => {
  
  const navigate = useNavigate()

  

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    showPassword: false,
  })

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if( credentials.username === "unodostres" && credentials.password === "12345678")
      navigate("/dashboard")

  }

  const handleShowPassword = () => {
    setCredentials({
      ...credentials,
      showPassword: !credentials.showPassword
    })    
  }

  

  return(
    <main>
      <form className="my-5 absolute"onSubmit={handleSubmit}>
        <div className="flex flex-col items-center border border-black rounded w-fit px-5 absolute">
          <fieldset className="border border-black p-3 rounded my-4">
            <legend>Username</legend>
            <input type="text" name="username" placeholder="karthuspentakill" value={credentials.username} onChange={handleChange} autoComplete="off required"/>
          </fieldset>
          <fieldset className="flex border border-black p-3 rounded">
            <legend>Password</legend>
            <input type={ credentials.showPassword ? "text" : "password" } name="password" placeholder="Type your password" value={credentials.password} minLength={8} onChange={handleChange} required/>
            { credentials.showPassword ? 
            <button type="button" className="material-symbols-outlined" onClick={ handleShowPassword } >visibility</button> : 
            <button type="button" className="material-symbols-outlined" onClick={ handleShowPassword } >visibility_off</button> }
          </fieldset>
          <span className="flex gap-5 my-3">
            <button type="submit">Sign In</button>
            <Link to="/sign-up"> <button >Sign Up</button> </Link>
          </span>
        </div>
      </form>
    </main>
  )
  
}

