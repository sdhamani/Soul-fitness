import { createContext, useContext, useReducer, useEffect } from "react";
import products from "../data/products";
import useData from "./data-context";
const CartContainer = createContext();

export default function useCart() {
  return useContext(CartContainer);
}

export function CartProvider({ children }) {
  const { data, setData } = useData();
  const dispatchFunc = (state, value) => {
    const obj = value.payload;
    switch (value.type) {
      case "ADDTOCART":
        console.log("CaseATC");
        if (!value.payload.addedToCart) {
          return [
            ...state,
            {
              id: obj.id,
              name: obj.name,
              quantity: 1,
              price: obj.price,
              image: obj.image,
            },
          ];
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

  const intialState = localStorage.getItem("cart-items")
    ? JSON.parse(localStorage.getItem("cart-items"))
    : [];

  const [cart, dispatch] = useReducer(dispatchFunc, intialState);

  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContainer.Provider
      value={{
        cart: cart,
        dispatch: dispatch,
      }}
    >
      {" "}
      {children}{" "}
    </CartContainer.Provider>
  );
}
