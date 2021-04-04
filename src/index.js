import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context/products-context.js";
import { CartProvider } from "./context/cart-context.js";
import { DataProvider } from "./context/data-context.js";
import { WishlistProvider } from "./context/wishlist-context";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <ProductProvider>
        <CartProvider>
          <WishlistProvider>
            <Router>
              <App />
            </Router>
          </WishlistProvider>
        </CartProvider>
      </ProductProvider>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
