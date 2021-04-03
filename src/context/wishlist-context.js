import { createContext, useContext, useReducer } from "react";

const WishlistContainer = createContext();

export default function useWishlist() {
  return useContext(WishlistContainer);
}

export function WishlistProvider({ children }) {
  const dispatchFunc = (state, value) => {
    const obj = value.payload;

    if (value.type === "UPDATEWISHLIST") {
      if (obj.addedToWishlist === false) {
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
        return state.filter((item) => item.id !== obj.id);
      }
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
