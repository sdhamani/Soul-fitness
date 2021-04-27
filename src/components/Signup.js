import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SignupUser from "../api/signup-api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");
  const [userNameError, setuserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const [showalert, setShowAlert] = useState(false);

  const changeShowAlert = (text) => {
    setShowAlert(text);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  function AlertComp() {
    if (showalert === "Account has been created successfully.") {
      return (
        <div className="alert">
          <h3 className="alert-success">
            <i className="fa fa-check-circle" aria-hidden="true"></i>{" "}
            {showalert}
          </h3>
        </div>
      );
    } else {
      return (
        <div class="alert">
          <h3 class="alert-warning">
            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
            {showalert}
          </h3>
        </div>
      );
    }
  }

  const createUser = async () => {
    const response = await SignupUser(userName, email, password);
    if (response === "Account has been created successfully.") {
      changeShowAlert(response);

      navigate("/login");
    } else if (response.includes("duplicate")) {
      changeShowAlert("User already exists");
    } else {
      changeShowAlert("User already exists");
    }
  };

  useEffect(() => {
    if (userName.length === 0) {
      setuserNameError("This field is required");
    } else if (userName.length < 3) {
      setuserNameError("Enter atleast 3 letters");
    } else {
      setuserNameError("");
    }
  }, [userName]);

  useEffect(() => {
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
    if (emailError === "" && passwordError === "" && userNameError === "") {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [password, emailError, passwordError, userNameError]);
  return (
    <div className="signup-div">
      <div className="signup-center-div">
        <div className="signup-card">
          <h1 className="login-account">Create Account</h1>
          <div className="login-input-div">
            <input
              className="login-input"
              onChange={(e) => setuserName(e.target.value)}
              type="text"
              placeholder="Enter Full Name"
            ></input>
          </div>
          {userNameError !== "" ? (
            <p className="input-check">{userNameError}</p>
          ) : null}
          <div className="login-input-div">
            <input
              className="login-input"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter an emailID"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            ></input>
          </div>
          {emailError !== "" ? (
            <p className="input-check">{emailError}</p>
          ) : null}
          <div className="login-input-div">
            <input
              className="login-input"
              placeholder="Enter passowrd"
              pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></input>
          </div>

          {passwordError !== "" ? (
            <p className="input-check">{passwordError}</p>
          ) : null}

          <input
            type="submit"
            value="CREATE"
            onClick={(e) => createUser()}
            className={
              isSubmitDisabled
                ? "disabled-btn signin"
                : "btn primary-button signin"
            }
            disabled={isSubmitDisabled}
          ></input>

          <button className="login-actions">
            <Link className="login-actions-link" to="/login">
              Have an account? Login
            </Link>
          </button>
        </div>
        {showalert && <AlertComp />}
      </div>
    </div>
  );
}
