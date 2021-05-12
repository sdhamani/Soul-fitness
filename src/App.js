import "./App.css";

import Cart from "./components/Cart";
import Nav from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import { useState, useEffect } from "react";
import Wishlist from "./components/Wishlist";
import MensProducts from "./components/MensProducts";
import Womensproducts from "./components/WomensProducts";
import Footer from "./components/Footer";
import Equipments from "./components/Equipments";
import PageNotFound from "./components/PageNotFound";
import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import useData from "./context/data-context";
import GetProducts from "./api/products-api";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [route, setRoute] = useState("landing");
  const { data, setData } = useData();

  return (
    <div className="App">
      <Nav route={route} setRoute={setRoute} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <PrivateRoute path="/wishlist" element={<Wishlist />} />
        <PrivateRoute path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/mens" element={<MensProducts />} />
        <Route path="/womens" element={<Womensproducts />} />
        <Route path="/equipments" element={<Equipments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
