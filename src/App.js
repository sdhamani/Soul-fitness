import "./App.css";
import products from "./data/products";
import Card from "./components/Card";
import Nav from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import { useState } from "react";

function App() {
  const [route, setRoute] = useState("landing");
  return (
    <div className="App">
      <Nav route={route} setRoute={setRoute} />
      {route === "landing" && <LandingPage />}
      {route === "products" && <Products />}
      {route === "cart" && <Card products={products} />}
    </div>
  );
}

export default App;
