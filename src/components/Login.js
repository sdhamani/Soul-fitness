import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../context/login-context";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const { state } = useLocation();
  const [passwordError, setPasswordError] = useState("");
  const [credentialsError, setCredentialsError] = useState("");
  const { loggedIn, setloggedIn } = useLogin();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const navigate = useNavigate();
  const userEmail = "test@gmail.com";
  const userPassword = "Test@1234";

  const signInUser = () => {
    if (email === userEmail) {
      if (password === userPassword) {
        setloggedIn(true);
        localStorage?.setItem(
          "login",
          JSON.stringify({ isUserLoggedIn: true })
        );
        navigate(state?.from ? state.from : "/");
      } else {
        setCredentialsError("Incorrect Password");
        setloggedIn(false);
      }
    } else {
      setCredentialsError("Incorrect Email");
      setloggedIn(false);
    }
  };

  useEffect(() => {
    setCredentialsError("");
    var re = /\S+@\S+\.\S\S+/;
    if (email.length === 0) {
      setEmailError("This field is required");
    } else if (!re.test(email)) {
      setEmailError("Not a valid email");
    } else {
      setEmailError("");
    }
  }, [email]);

  useEffect(() => {
    setCredentialsError("");
    let special = /[\W]{1,}/;
    if (password.length === 0) {
      setPasswordError("This field is required");
    } else if (password.length < 5) {
      setPasswordError("Passowrd should contain min 6 char");
    } else if (password.search(/[A-Z]/) < 0) {
      setPasswordError("Password should contain one UpperCase");
    } else if (password.search(/[a-z]/) < 0) {
      setPasswordError("Password should contain one LowerCase");
    } else if (password.search(/[0-9]/) < 0) {
      setPasswordError("Password should contain one number");
    } else if (!special.test(password)) {
      setPasswordError("Password should contain one special character");
    } else {
      setPasswordError("");
    }
    if (emailError === "" && passwordError === "") {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [password, emailError, passwordError]);

  return (
    <div className="login-div">
      <div className="login-center-div">
        <div className="login-card">
          <h1 className="login-account">Login Account</h1>

          <div className="login-input-div">
            <input
              placeholder="Enter an email Id"
              className="login-input"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            ></input>
          </div>
          {emailError !== "" ? (
            <p className="input-check">*{emailError}</p>
          ) : null}
          <div className="login-input-div">
            <input
              placeholder="EnterPassword"
              className="login-input"
              pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></input>
          </div>

          {passwordError !== "" ? (
            <p className="input-check">*{passwordError}</p>
          ) : null}

          {credentialsError !== "" ? (
            <p className="input-check">*{credentialsError}</p>
          ) : null}

          <input
            type="submit"
            value="SIGN IN"
            className={
              isSubmitDisabled
                ? "disabled-btn signin"
                : "btn primary-button signin"
            }
            onClick={(e) => signInUser()}
            disabled={isSubmitDisabled}
          ></input>

          <button className="login-actions">
            <Link className="login-actions-link" to="/signup">
              Don't have an account? Create an account
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
