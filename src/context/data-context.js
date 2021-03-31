import { createContext, useContext } from "react";
import products from "../data/products";
import { useState } from "react";

const DataContainer = createContext();

export default function useData() {
  return useContext(DataContainer);
}

export function DataProvider({ children }) {
  const [data, setdata] = useState(products);

  return <DataContainer.Provider>{children}</DataContainer.Provider>;
}
