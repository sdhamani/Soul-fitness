import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const LoginContainer = createContext();

export default function useLogin() {
  return useContext(LoginContainer);
}

export function LoginProvider({ children }) {
  const [loggedIn, setloggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setuserName] = useState("");

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
      value={{
        loggedIn: loggedIn,
        setloggedIn: setloggedIn,
        token: token,
        setToken: setToken,
        userName: userName,
        setuserName: setuserName,
      }}
    >
      {children}
    </LoginContainer.Provider>
  );
}
