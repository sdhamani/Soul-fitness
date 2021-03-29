import "./App.css";
import products from "./data/products";
import Card from "./components/Card";
import Nav from "./components/NavBar";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
      {/* <Card products={products} /> */}
    </div>
  );
}

export default App;
