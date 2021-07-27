import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";

import useWishlist from "./wishlist-context";
import Getwishlist from "../api/wishlist-api";
import Getcart from "../api/cart-api";

const CartContainer = createContext();

export default function useCart() {
  return useContext(CartContainer);
}

export function CartProvider({ children }) {
  const [initalcart, setInitialCart] = useState([]);
  const { wishlistdispatch } = useWishlist();

  useEffect(() => {
    const getCartAndWishlist = async (token) => {
      const apicart = await Getcart(token);
      dispatch({ type: "USERCART", payload: apicart });
      const apiwishlist = await Getwishlist(token);
      wishlistdispatch({ type: "USERWISHLIST", payload: apiwishlist });
    };
    if (JSON.parse(localStorage?.getItem("login"))) {
      const { token } = JSON.parse(localStorage?.getItem("token"));
      getCartAndWishlist(token);
    }
  }, [wishlistdispatch]);

  const dispatchFunc = (state, value) => {
    const obj = value.payload;
    switch (value.type) {
      case "USERCART":
        return obj;

      default:
        return state;
    }
  };

  const [cart, dispatch] = useReducer(dispatchFunc, initalcart);

  return (
    <CartContainer.Provider
      value={{
        cart: cart,
        dispatch: dispatch,
        setInitialCart: setInitialCart,
      }}
    >
      {" "}
      {children}{" "}
    </CartContainer.Provider>
  );
}
