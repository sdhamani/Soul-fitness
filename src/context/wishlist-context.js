import { createContext, useContext, useReducer } from "react";

const WishlistContainer = createContext();

export default function useWishlist() {
  return useContext(WishlistContainer);
}

export function WishlistProvider({ children }) {
  const dispatchFunc = (state, value) => {
    switch (value.type) {
      case "USERWISHLIST":
        return value.payload;
      default:
        return state;
    }
  };

  const [wishlist, wishlistdispatch] = useReducer(dispatchFunc, []);

  return (
    <WishlistContainer.Provider
      value={{ wishlist: wishlist, wishlistdispatch: wishlistdispatch }}
    >
      {children}
    </WishlistContainer.Provider>
  );
}
