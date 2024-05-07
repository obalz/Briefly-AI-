import React from "react";
import { useState } from "react";
import SignInContainer from "./SignInContainer";
import SignUpContainer from "./SignUpContainer";
import PanelsContainer from "./PanelsContainer";

import "../LoginForm.css";
import { faLess } from "@fortawesome/free-brands-svg-icons";

function Container() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleSignUp = () => {
    setIsSignUpMode(true);
    setIsLoginMode(false);
    console.log("signup settings true");
  };

  const handleSignIn = () => {
    setIsSignUpMode(false);
    setIsLoginMode(true);
    console.log("none, ");
  };

  const handleSignUp2 = () => {
    setIsSignUpMode(true);
  };

  const handleSignIn2 = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`container`}>
      <div className="SigninSignup">
        {isLoginMode && <SignInContainer />}
        {isSignUpMode && <SignUpContainer />}
      </div>
      <PanelsContainer
        handleSignUp={handleSignUp}
        isLoginMode={isLoginMode}
        isSignUpMode={isSignUpMode}
        handleSignIn={handleSignIn}
      />
    </div>
  );
}

export default Container;
