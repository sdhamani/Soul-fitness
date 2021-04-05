import { createContext, useContext } from "react";
import { useReducer } from "react";
import products from "../data/products";
import useData from "../context/data-context";

const ProductContainer = createContext();

export default function useProducts() {
  return useContext(ProductContainer);
}

function dispatchfun(state, value) {
  // console.log("Hello123", { value });
  console.log(state, value);
  switch (value.type) {
    case "SORT":
      return { ...state, sortBy: value.payload };
    case "FILTER": {
      if (value.payload === "OOS") {
        return { ...state, showAllProducts: !state.showAllProducts };
      } else {
        return { ...state, showOnlyFastDelivery: !state.showOnlyFastDelivery };
      }
    }
    case "FILTERCAT": {
      // console.log("Cavalue", value.payload);
      console.log("rrr", state.filterByCateogory);
      // console.log(value.payload in state.filterByCateogory);
      return {
        ...state,
        filterByCateogory: state.filterByCateogory.includes(value.payload)
          ? state.filterByCateogory.filter((item) => item !== value.payload)
          : [...state.filterByCateogory, value.payload],
      };
    }
    default:
      return state;
  }
}

// function dispatchfun(state, value) {
//   console.log({ state });
//   switch (value.type) {
//     case "SORT":
//       let sortedArray;
//       if (value.payload === "LOWTOHIGH") {
//         sortedArray = state.sort(function (a, b) {
//           return a["price"] - b["price"];
//         });
//       }
//       if (value.payload === "HIGHTOLOW") {
//         sortedArray = state.sort(function (a, b) {
//           return b["price"] - a["price"];
//         });
//       }
//       return sortedArray;
//     case "FILTERSTO":
//       return state.filter((item) => item.inStock === "Instock");
//     case "FILTERDEL":
//       return state.filter((item) => item.delivery === "Prime");
//     case "FILTERCAT": {
//       return state.filter((item) => item.cateogory === value.payload);
//     }
//     default:
//       return state;
//   }
// }
export function ProductProvider({ children }) {
  const { data, setData } = useData();

  const [
    { showAllProducts, showOnlyFastDelivery, sortBy, filterByCateogory },
    dispatch,
  ] = useReducer(dispatchfun, {
    showAllProducts: true,
    showOnlyFastDelivery: false,
    sortBy: false,
    filterByCateogory: [],
  });

  // const [filteredArray, dispatch] = useReducer(dispatchfun, data);

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
    { showAllProducts, showOnlyFastDelivery, filterByCateogory }
  ) => {
    let fa = sortedArray;
    if (!showAllProducts) {
      console.log("IS");
      fa = fa.filter((item) => item.inStock === "Instock");
    }
    if (showOnlyFastDelivery) {
      console.log("FD");
      fa = fa.filter((item) => item.delivery === "Prime");
    }
    if (filterByCateogory.length !== 0) {
      console.log("FMH", filterByCateogory);
      fa = fa.filter((item) => filterByCateogory.includes(item.cateogory));
    }
    return fa;
  };

  const filteredArray = filterArray(sortedArray, {
    showAllProducts,
    showOnlyFastDelivery,
    filterByCateogory,
  });

  return (
    <ProductContainer.Provider
      value={{
        filteredArray: filteredArray,
        dispatch: dispatch,
      }}
    >
      {children}{" "}
    </ProductContainer.Provider>
  );
}
