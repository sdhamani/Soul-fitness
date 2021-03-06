import { createContext, useContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import GetProducts from "../api/products-api";

import useData from "../context/data-context";

const ProductContainer = createContext();

export default function useProducts() {
  return useContext(ProductContainer);
}

function dispatchfun(state, value) {
  switch (value.type) {
    case "SORT":
      return { ...state, sortBy: value.payload };
    case "FILTER": {
      if (value.payload === "") {
        return {
          ...state,
          showAllProducts: true,
          showOnlyFastDelivery: false,
        };
      }
      if (value.payload === "OOS") {
        return { ...state, showAllProducts: !state.showAllProducts };
      } else {
        return { ...state, showOnlyFastDelivery: !state.showOnlyFastDelivery };
      }
    }
    case "FILTERCAT": {
      if (value.payload === "") {
        return {
          ...state,
          filterByCateogory: [],
        };
      }
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

export function ProductProvider({ children }) {
  const { data, setData } = useData();

  useEffect(() => {
    async function fecthproducts() {
      const response = await GetProducts();
      if (response.success) {
        setData(response.products);
      } else {
        console.log(response.data.message);
      }
    }
    fecthproducts();
  }, [setData]);

  const [
    { showAllProducts, showOnlyFastDelivery, sortBy, filterByCateogory },
    dispatch,
  ] = useReducer(dispatchfun, {
    showAllProducts: true,
    showOnlyFastDelivery: false,
    sortBy: false,
    filterByCateogory: [],
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
    { showAllProducts, showOnlyFastDelivery, filterByCateogory }
  ) => {
    let fa = sortedArray;

    if (!showAllProducts) {
      fa = fa.filter((item) => item.inStock === "Instock");
    }
    if (showOnlyFastDelivery) {
      fa = fa.filter((item) => item.delivery === "Prime");
    }
    if (filterByCateogory.length !== 0) {
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
