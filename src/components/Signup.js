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
  const [showLoading, setshowLoading] = useState(false);

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
        <div className="alert">
          <h3 className="alert-warning">
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
            {showalert}
          </h3>
        </div>
      );
    }
  }

  const createUser = async () => {
    setshowLoading(true);
    const response = await SignupUser(userName, email, password);
    if (response === "Account has been created successfully.") {
      changeShowAlert(response);

      navigate("/login");
    } else if (response.includes("duplicate")) {
      changeShowAlert("User already exists");
    } else {
      changeShowAlert("User already exists");
    }
    setshowLoading(false);
  };

  useEffect(() => {
    if (userName !== "") {
      if (userName.length === 0) {
        setuserNameError("This field is required");
      } else if (userName.length < 3) {
        setuserNameError("Enter atleast 3 letters");
      } else {
        setuserNameError("");
      }
    } else {
      setuserNameError("");
    }
  }, [userName]);

  useEffect(() => {
    if (email !== "") {
      var re = /\S+@\S+\.\S\S+/;
      if (email.length === 0) {
        setEmailError("This field is required");
      } else if (!re.test(email)) {
        setEmailError("Not a valid email");
      } else {
        setEmailError("");
      }
    } else {
      setEmailError("");
    }
  }, [email]);

  useEffect(() => {
    if (password !== "") {
      let special = /[\W]{1,}/;
      if (password.length === 0) {
        setPasswordError("This field is required");
      } else if (password.length < 5) {
        setPasswordError(
          "Passowrd should contain min 6 char, one UpperCase letter, one LowerCase letter, one number and one special character"
        );
      } else if (password.search(/[A-Z]/) < 0) {
        setPasswordError(
          "Passowrd should contain min 6 char, one UpperCase letter, one LowerCase letter, one number and one special character"
        );
      } else if (password.search(/[a-z]/) < 0) {
        setPasswordError(
          "Passowrd should contain min 6 char, one UpperCase letter, one LowerCase letter, one number and one special character"
        );
      } else if (password.search(/[0-9]/) < 0) {
        setPasswordError(
          "Passowrd should contain min 6 char, one UpperCase letter, one LowerCase letter, one number and one special character"
        );
      } else if (!special.test(password)) {
        setPasswordError(
          "Passowrd should contain min 6 char, one UpperCase letter, one LowerCase letter, one number and one special character"
        );
      } else {
        setPasswordError("");
      }
      if (emailError === "" && passwordError === "" && userNameError === "") {
        setIsSubmitDisabled(false);
      } else {
        setIsSubmitDisabled(true);
      }
    } else {
      setPasswordError("");
    }
  }, [password, emailError, passwordError, userNameError]);
  return (
    <div className="signup-div">
      <div className="signup-center-div">
        <div className="signup-card">
          <h1 className="login-account">Create Account</h1>
          <form
            className="signup-form"
            onSubmit={(event) => {
              event.preventDefault();
              return isSubmitDisabled ? null : createUser();
            }}
          >
            <div className="login-input-div">
              <input
                className="login-input"
                onChange={(e) => setuserName(e.target.value)}
                type="text"
                placeholder="Enter Full Name"
              ></input>
              {userNameError !== "" ? (
                <p className="input-check">* {userNameError}</p>
              ) : null}
            </div>

            <div className="login-input-div">
              <input
                className="login-input"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter an emailID"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                autoComplete="on"
              ></input>
              {emailError !== "" ? (
                <p className="input-check">* {emailError}</p>
              ) : null}
            </div>

            <div className="login-input-div">
              <input
                className="login-input"
                placeholder="Enter Password"
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="on"
              ></input>
              {passwordError !== "" ? (
                <p className="input-check input-check-pass">
                  * {passwordError}
                </p>
              ) : null}
            </div>

            <input
              type="submit"
              value={showLoading ? "CREATING" : "CREATE "}
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
          </form>
        </div>
        {showalert && <AlertComp />}
      </div>
    </div>
  );
}
