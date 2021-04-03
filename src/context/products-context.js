import { createContext, useContext } from "react";
import { useReducer } from "react";
import products from "../data/products";
import useData from "../context/data-context";

const ProductContainer = createContext();

export default function useProducts() {
  return useContext(ProductContainer);
}

function dispatchfun(state, value) {
  console.log("Here");
  console.log(state, value);
  switch (value.type) {
    case "SORT":
      return { ...state, sortBy: value.payload };
    case "FILTER": {
      console.log("There");
      console.log({ value });
      console.log({ state });
      if (value.payload === "OOS") {
        return { ...state, showAllProducts: !state.showAllProducts };
      } else {
        return { ...state, showOnlyFastDelivery: !state.showOnlyFastDelivery };
      }
    }
    default:
      return state;
  }
}

export function ProductProvider({ children }) {
  const { data, setData } = useData();

  const [
    { showAllProducts, showOnlyFastDelivery, sortBy },
    dispatch,
  ] = useReducer(dispatchfun, {
    showAllProducts: true,
    showOnlyFastDelivery: false,
    sortBy: false,
  });

  const sortByFun = (prodArray, sortBy) => {
    if (sortBy === "LOWTOHIGH") {
      prodArray.sort(function (a, b) {
        return a["price"] - b["price"];
      });
    }
    if (sortBy === "HIGHTOLOW") {
      prodArray.sort(function (a, b) {
        return b["price"] - a["price"];
      });
    }
    return prodArray;
  };

  const sortedArray = sortByFun(data, sortBy);

  const filterArray = (
    sortedArray,
    { showAllProducts, showOnlyFastDelivery }
  ) => {
    // console.log("FA", showOnlyFastDelivery);
    let fa = sortedArray;
    if (!showAllProducts) {
      //   console.log("IS");
      fa = fa.filter((item) => item.inStock === "Instock");
    }
    if (showOnlyFastDelivery) {
      //   console.log("FD");
      fa = fa.filter((item) => item.delivery === "Prime");
    }
    return fa;
  };

  const filteredArray = filterArray(sortedArray, {
    showAllProducts,
    showOnlyFastDelivery,
  });

  return (
    <ProductContainer.Provider
      value={{ filteredArray: filteredArray, dispatch: dispatch }}
    >
      {children}
    </ProductContainer.Provider>
  );
}
