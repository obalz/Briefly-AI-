import React from "react";
import "../LoginForm.css";

function SignUpContainer() {
  return (
    <div>
      <form action="" className="signUpForm">
        <h2 className="title">Sign up</h2>
        <div className="inputField">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div className="inputField">
          <i className="fas fa-envelope"></i>
          <input type="text" placeholder="Email" />
        </div>
        <div className="inputField">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" value="Sign up" className="btn" />
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
          Already have an account?{" "}
          <a href="#" id="sign-in-btn2">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}

export default SignUpContainer;
