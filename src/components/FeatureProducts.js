import "./components.css";
import Card from "./Card";
export default function FeatureProducts({ products }) {
  return (
    <div className="cards cards-ecom">
      <Card products={products} />
    </div>
  );
}
