import React from "react";
import "../LoginForm.css";

import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

function PanelsContainer({
  handleSignUp,
  isLoginMode,
  isSignUpMode,
  handleSignIn,
}) {
  return (
    <div className="panels">
      {isSignUpMode && <LeftPanel handleSignIn={handleSignIn} />}

      {isLoginMode && <RightPanel handleSignUp={handleSignUp} />}
    </div>
  );
}

export default PanelsContainer;
