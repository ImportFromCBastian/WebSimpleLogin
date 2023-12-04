import { Link } from "react-router-dom"

export const SignUp = () => {

  return(
    <div className="">
      <form className="flex items-center mx-8 border-2 rounded-xl border-red-500 flex-col mt-6 min-h-[500] max-h-[890]">
        <fieldset className="border border-black p-3 rounded">
          <legend>Username</legend>
          <input type="text" name="signUpUsername" placeholder="maven123" required autoComplete="off" maxLength="15"/>
        </fieldset>
        <fieldset className="border border-black p-3 rounded">
          <legend>Name</legend>
          <input type="text" name="signUpName" placeholder="Carlos"/>
        </fieldset>
        <fieldset className="border border-black p-3 rounded">
          <legend>Last Name</legend>
          <input type="text" name="signUpLastName" placeholder="&Aacute;lvarez"/>
        </fieldset>
        <fieldset className="border border-black p-3 rounded">
          <legend>E-mail</legend>
          <input type="email" name="signUpEmail" placeholder="karthus@gmail.com" required autoComplete="off"/>
        </fieldset>
        <fieldset className="border border-black p-3 rounded" hidden>
          <legend>Confirm E-mail</legend>
          <input type="email" name="signUpEmailConfirmation" placeholder="karthus@gmail.com"  required autoComplete="off" />
        </fieldset>
        <fieldset className="border border-black p-3 rounded">
          <legend>Password</legend>
          <input type="password" name="signUpPassword" placeholder="1234" required autoComplete="off" minLength="8"/>
        </fieldset>
        <fieldset className="border border-black p-3 rounded" hidden>
          <legend>Confirm Password</legend>
          <input type="password" name="signUpPasswordConfirmation" placeholder="1234" required autoComplete="off" minLength="8"/>
        </fieldset>
        <span className="inline my-4 min-w-fit">
          <button className="border-2 rounded p-2 bg-green-500" type="submit">Confirm</button>
          <Link to="/"> <button className="border-2 rounded p-2 bg-red-500">Cancel</button> </Link>
        </span>
      </form>
    </div>
  )

}