import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(null);

  return (
    <div div className="loginScreen">
      <div className="loginScreen__background">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          className="loginScreen__logo"
          alt=""
        />

        <button onClick={() => setSignIn(true)} className="loginScreen_button">
          {" "}
          Sign in{" "}
        </button>

        <div className="loginScreen__gradient"></div>
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited Movies, Shows and TV Programmes!!</h1>
            <h2>Watch anywhere, cancel at any time </h2>
            <h3>
              Ready to watch? Enter your email to create your account or restart
              your membership
            </h3>

            <div className="loginScreen__input">
              <form action="">
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
