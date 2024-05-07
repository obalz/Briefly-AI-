import React from "react";
import signinImage from "../../assets/signinImage.svg";

function LeftPanel({ handleSignIn }) {
  return (
    <div className="panel leftPanel">
      <div className="content">
        <h3>Member of Brand?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          accusantium dolor, eos incidunt minima iure?
        </p>
        <button onClick={handleSignIn} className="btn" id="sign-in-btn">
          Sign in
        </button>
      </div>
      <img src={signinImage} alt="" className="image" />
    </div>
  );
}

export default LeftPanel;
