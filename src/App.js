import "./App.css";

import Cart from "./components/Cart";
import Nav from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import { useState } from "react";
import Wishlist from "./components/Wishlist";
import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [route, setRoute] = useState("landing");
  console.log(route);
  return (
    <div className="App">
      <Nav route={route} setRoute={setRoute} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
