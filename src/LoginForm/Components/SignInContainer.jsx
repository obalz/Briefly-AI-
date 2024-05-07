import React from "react";
import "../LoginForm.css";

function SignInContainer({ handleSignUp }) {
  return (
    <div>
      <form action="" className="signInForm">
        <h2 className="title">Sign in</h2>
        <div className="inputField">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div className="inputField">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" value="Login" className="btn" />
        <p className="socialText">Or Sign in with social platform</p>
        <div className="socialMedia">
          <a href="#" className="socialIcon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="" className="socialIcon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="socialIcon">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="socialIcon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p className="accountText">
          Don't have an account?{" "}
          <a href="#" id="sign-up-btn2">
            Sign up23
          </a>
        </p>
      </form>
    </div>
  );
}

export default SignInContainer;
