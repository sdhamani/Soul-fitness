import "./components.css";
import Nav from "./NavBar";
import Card from "./Card";
import products from "../data/products";

export default function Products() {
  return (
    <div>
      <Card products={products} />
    </div>
  );
}
