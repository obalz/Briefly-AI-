function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.name === "") {
    error.name = "Enter your name or else you will be called as 'Hacker'";
  } else {
    error.name = "";
  }

  if (values.email === "") {
    error.email = "Email is required";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email is invalid! Keep practicing!";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password is required";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Dude! Password is invalid";
  } else if (values.password.length <= 8) {
    error.password = "Password needs to be at least 8 characters long";
  } else {
    error.password = "";
  }

  return error;
}

export default Validation;
