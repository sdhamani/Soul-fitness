import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const LoginContainer = createContext();

export default function useLogin() {
  return useContext(LoginContainer);
}

export function LoginProvider({ children }) {
  const [loggedIn, setloggedIn] = useState(false);
  useEffect(() => {
    console.log("UE RAN");
    if (localStorage.getItem("login")) {
      console.log("Inside LS");
      const { isUserLoggedIn } = JSON.parse(localStorage?.getItem("login"));
      isUserLoggedIn && setloggedIn(true);
    }
  }, []);

  return (
    <LoginContainer.Provider
      value={{ loggedIn: loggedIn, setloggedIn: setloggedIn }}
    >
      {children}
    </LoginContainer.Provider>
  );
}
