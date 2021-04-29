import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import Getwishlist from "../api/wishlist-api";
import Getcart from "../api/cart-api";
import useCart from "../context/cart-context";
import useWishlist from "../context/wishlist-context";
const LoginContainer = createContext();

export default function useLogin() {
  return useContext(LoginContainer);
}

export function LoginProvider({ children }) {
  // const { localUserName } = JSON.parse(localStorage?.getItem("localUserName"));

  const [loggedIn, setloggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setuserName] = useState("");

  useEffect(() => {
    console.log("running login ue");
    if (localStorage.getItem("login")) {
      const { isUserLoggedIn } = JSON.parse(localStorage?.getItem("login"));
      const Usertoken = JSON.parse(localStorage?.getItem("token"));
      isUserLoggedIn && setloggedIn(true);
      setToken(Usertoken.token);
    }
    if (localStorage?.getItem("localUserName")) {
      const { localUserName } = JSON.parse(
        localStorage?.getItem("localUserName")
      );
      console.log("localUserName", localUserName);
      setuserName(localUserName);
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
