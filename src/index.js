import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context/products-context.js";
import { CartProvider } from "./context/cart-context.js";
import { DataProvider } from "./context/data-context.js";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
