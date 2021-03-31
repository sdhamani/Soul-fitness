import { createContext, useContext, useReducer } from "react";
import products from "../data/products";

const CartContainer = createContext();

export default function useCart() {
  return useContext(CartContainer);
}

export function CartProvider({ children }) {
  const dispatchFunc = (state, value) => {
    console.log("Here");
    console.log(state, { value });
    console.log("len", state.length);

    if (!value.payload.addedToCart) {
      return [...state, value.payload];
    }
    return state;
  };

  const [cart, dispatch] = useReducer(dispatchFunc, []);
  return (
    <CartContainer.Provider value={{ cart: cart, dispatch: dispatch }}>
      {children}
    </CartContainer.Provider>
  );
}
