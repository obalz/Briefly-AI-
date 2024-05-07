import React from "react";
import signupImage from "../../assets/signupImage.svg";

function RightPanel({ handleSignUp }) {
  return (
    <div className="panel rightPanel">
      <div className="content">
        <h3>New to Brand?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          accusantium dolor, eos incidunt minima iure?
        </p>
        <button onClick={handleSignUp} className="btn" id="sign-up-btn">
          Sign up23
        </button>
      </div>
      <img src={signupImage} alt="" className="image" />
    </div>
  );
}

export default RightPanel;
