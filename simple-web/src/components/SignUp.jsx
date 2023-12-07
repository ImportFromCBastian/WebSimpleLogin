import { Link } from "react-router-dom"

export const SignUp = () => {

  return(
    <form className="my-5">
      <div className="flex flex-col items-center border border-black rounded w-fit px-5 absolute">
        <fieldset className="border border-black p-3 rounded my-3">
          <legend>Username</legend>
          <input type="text" name="signUpUsername" placeholder="maven123" required autoComplete="off" maxLength="15"/>
        </fieldset>
        <fieldset className="border border-black p-3 rounded my-3">
          <legend>Name</legend>
          <input type="text" name="signUpName" placeholder="Carlos"/>
        </fieldset>
        <fieldset className="border border-black p-3 rounded my-3">
          <legend>Last Name</legend>
          <input type="text" name="signUpLastName" placeholder="&Aacute;lvarez"/>
        </fieldset>
        <fieldset className="border border-black p-3 rounded my-3">
          <legend>E-mail</legend>
          <input type="email" name="signUpEmail" placeholder="karthus@gmail.com" required autoComplete="off"/>
        </fieldset>
        <fieldset className="border border-black p-3 rounded my-3" hidden>
          <legend>Confirm E-mail</legend>
          <input type="email" name="signUpEmailConfirmation" placeholder="karthus@gmail.com"  required autoComplete="off" />
        </fieldset>
        <fieldset className="border border-black p-3 rounded my-3">
          <legend>Password</legend>
          <input type="password" name="signUpPassword" placeholder="1234" required autoComplete="off" minLength="8"/>
        </fieldset>
        <fieldset className="border border-black p-3 rounded my-3" hidden>
          <legend>Confirm Password</legend>
          <input type="password" name="signUpPasswordConfirmation" placeholder="1234" required autoComplete="off" minLength="8"/>
        </fieldset>
        <span className="inline my-4 min-w-fit">
          <button className="border-2 rounded-2xl p-2 bg-green-300 hover:bg-green-500" type="submit">Confirm</button>
          <Link to="/"> <button className="border-2 rounded-2xl p-2 bg-red-300 hover:bg-red-500">Cancel</button> </Link>
        </span>
     </div>
    </form>
  )

}