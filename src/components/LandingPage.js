import Card from "./Card";
import FeatureProducts from "./FeatureProducts";
import products from "../data/products";

import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="text-overlay">
        <img
          className="text-overlay-image"
          alt="Na"
          src="https://demo.fieldthemes.com/catalan/modules/fieldslideshow/images/slide1-501.jpg"
        />
        <div className="text-overlay-data text-overlay-data-ecom ">
          <div className="text-overlay-h1">COLLECTION</div>
          <div className="text-overlay-h2">Sportswear</div>
          <button className="btn primary-button text-overlay-btn " href="/">
            <Link to="/mens"> Shop Now !</Link>{" "}
          </button>
        </div>
      </div>
      <div className="image-grid">
        <img
          className="responsive-img-ecom"
          alt="NA"
          src="https://demo.fieldthemes.com/catalan/modules/fieldhtmlblock/images/bn1.png"
        ></img>
        <div>
          <div>
            <img
              className="responsive-img-ecom"
              alt="NA"
              src="https://demo.fieldthemes.com/catalan/modules/fieldhtmlblock/images/bn2.png"
            ></img>
            <img
              className="responsive-img-ecom"
              alt="NA"
              src="https://demo.fieldthemes.com/catalan/modules/fieldhtmlblock/images/bn3.png"
            ></img>
          </div>
          <div>
            <img
              className="responsive-img-ecom"
              alt="NA"
              src="https://demo.fieldthemes.com/catalan/modules/fieldhtmlblock/images/bn4.png"
            ></img>
          </div>
        </div>
      </div>
      <div className="landing-best-products">
        <p className="landing-best-products-h1">The Best Products Of Catalan</p>
        <p className="landing-best-products-h2">FEATURE PRODUCTS</p>
        <FeatureProducts products={products.slice(1, 7)} />
      </div>
    </div>
  );
}
