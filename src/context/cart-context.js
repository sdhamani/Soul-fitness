import { createContext, useContext, useReducer, useState } from "react";
import { AddToCart } from "../api/cart-api";

import useData from "./data-context";
import useLogin from "./login-context";

const CartContainer = createContext();

export default function useCart() {
  return useContext(CartContainer);
}

export function CartProvider({ children }) {
  const { token } = useLogin();
  const [initalcart, setInitialCart] = useState([]);
  const { data, setData } = useData();

  const addtocart = async (token, productid) => {
    const response = await AddToCart(token, productid);
    if (response.success) {
      return { success: true, updatedCart: response.updatedCart };
    } else {
      return { success: false, message: response.message };
    }
  };

  const dispatchFunc = (state, value) => {
    const obj = value.payload;
    console.log({ obj });
    switch (value.type) {
      case "USERCART":
        return value.payload;
      case "ADDTOCART":
        const response = addtocart(token, obj._id);
        if (response.success) {
          return (state = response.updatedCart);
        } else {
          return state;
        }
      case "ADDQUANTITY":
        const newArrayAdd = state.map((item) => {
          if (item.id === value.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });

        return newArrayAdd;
      case "SUBSQUANTITY":
        const newArraysSub = state.map((item) => {
          if (item.id === value.payload.id) {
            return {
              ...item,
              quantity: item.quantity === 1 ? item.quantity : item.quantity - 1,
            };
          }
          return item;
        });

        return newArraysSub;
      case "DELFROMCART":
        console.log("Casedele");
        console.log({ data });
        console.log({ value });
        const updatedArray = data.map((item) => {
          console.log("item.id-", item.id);
          console.log("value.payload.id-", value.payload.id);
          if (item.id === value.payload.id) {
            return { ...item, addedToCart: false };
          } else {
            return item;
          }
        });
        setData(updatedArray);
        return state.filter((item) => item.id !== value.payload.id);
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
