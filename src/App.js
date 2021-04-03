import "./App.css";
import products from "./data/products";
import Cart from "./components/Cart";
import Nav from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import { useState } from "react";
import Wishlist from "./components/Wishlist";

function App() {
  const [route, setRoute] = useState("landing");
  console.log(route);
  return (
    <div className="App">
      <Nav route={route} setRoute={setRoute} />
      {route === "landing" && <LandingPage />}
      {route === "products" && <Products />}
      {route === "cart" && <Cart />}
      {route === "wishlist" && <Wishlist />}
    </div>
  );
}

export default App;
