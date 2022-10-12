import React from "react";
import "./SignupScreen.css";

function SignupScreen() {
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input type="password" placeholder="Password" />
        <button type="submit"> Sign In</button>

        <h4>
          New to Netflix? <span> Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
