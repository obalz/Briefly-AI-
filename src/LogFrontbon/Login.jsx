import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  // to update the values of the input fields we call the previous state and update the values of the input fields

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  //   we can use this function to preventDefault submission

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/home");
          } else {
            alert("Invalid Email or Password");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h1 className="text-center">Login</h1>
        <form action="">
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={handleInput}
              name="email"
              id="email"
              className="form-control rounded-0"
            />
            {/* Here we show our errors: if the email is invalid then it will show the error message */}
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={handleInput}
              name="password"
              id="password"
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-0"
            onClick={handleSubmit}
          >
            Login
          </button>
          <p>By signing in, you agree to us for stealing your data. </p>
          <Link
            to="/signup"
            type="submit"
            className="btn btn-success default border w-100 bg-light text-dark rounded-0 text-decoration-none"
          >
            Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
