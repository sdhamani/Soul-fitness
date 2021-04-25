import React from "react";
import { Route, Navigate } from "react-router-dom";
import useLogin from "../context/login-context";
import { useEffect } from "react";

function PrivateRoute({ path, ...props }) {
  const { loggedIn, setloggedIn } = useLogin();
  console.log("loggedIn in private route", loggedIn);
  return loggedIn ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}

export default PrivateRoute;
