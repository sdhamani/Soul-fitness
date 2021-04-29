import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context/products-context.js";
import { CartProvider } from "./context/cart-context.js";
import { DataProvider } from "./context/data-context.js";
import { WishlistProvider } from "./context/wishlist-context";
import { LoginProvider } from "./context/login-context";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <WishlistProvider>
        <CartProvider>
          <DataProvider>
            <ProductProvider>
              <Router>
                <App />
              </Router>
            </ProductProvider>
          </DataProvider>
        </CartProvider>
      </WishlistProvider>
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
