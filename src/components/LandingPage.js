import Card from "./Card";
import products from "../data/products";

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
            {" "}
            Shop Now !{" "}
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
        <Card products={products.slice(1, 7)} />
      </div>
      <footer className="footer">
        <div className="footer-header">GET IN TOUCH</div>
        <ul>
          <li className="list-item-inline">
            <a
              className="link "
              href="https://www.linkedin.com/in/sagar-dhamani-a8b066114/"
            >
              LinkedIn
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="https://twitter.com/SagarDhamani1">
              Twitter
            </a>
          </li>
          <li className="list-item-inline">
            <a className="link" href="https://github.com/sdhamani">
              Git Hub
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
