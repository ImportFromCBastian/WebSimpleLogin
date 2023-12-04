import { useState } from "react"
import { Link } from "react-router-dom"

import "../assets/index.css"

export const Login = () => {
  

  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })

    console.log(credentials)

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if( credentials.username === "unodostres" && credentials.password === "12345678")
      console.log("Login successful")

  }

  

  return(
    <main>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Username</legend>
          <input type="text" name="username" placeholder="karthuspentakill" value={credentials.username} onChange={handleChange} autoComplete="off"/>
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <input type="password" name="password" placeholder="Type your password" value={credentials.password} minLength={8} onChange={handleChange}/>
        </fieldset>
        <span>
          <button type="submit">Sign In</button>
          <Link to="/sign-up"> <button >Sign Up</button> </Link>
        </span>
      </form>
    </main>
  )
  
}

