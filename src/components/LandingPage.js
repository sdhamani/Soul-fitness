import Card from "./Card";
import products from "../data/products";

export default function Landing() {
  return (
    <div class="landing-page">
      <div class="text-overlay">
        <img
          class="text-overlay-image"
          alt="Na"
          src="https://demo.fieldthemes.com/catalan/modules/fieldslideshow/images/slide1-501.jpg"
        />
        <div class="text-overlay-data text-overlay-data-ecom ">
          <div class="text-overlay-h1">COLLECTION</div>
          <div class="text-overlay-h2">Sportswear</div>
          <button class="btn primary-button text-overlay-btn " href="/">
            {" "}
            Shop Now !{" "}
          </button>
        </div>
      </div>
      <div class="image-grid">
        <img
          class="responsive-img-ecom"
          alt="NA"
          src="https://demo.fieldthemes.com/catalan/modules/fieldhtmlblock/images/bn1.png"
        ></img>
        <div>
          <div>
            <img
              class="responsive-img-ecom"
              alt="NA"
              src="https://demo.fieldthemes.com/catalan/modules/fieldhtmlblock/images/bn2.png"
            ></img>
            <img
              class="responsive-img-ecom"
              alt="NA"
              src="https://demo.fieldthemes.com/catalan/modules/fieldhtmlblock/images/bn3.png"
            ></img>
          </div>
          <div>
            <img
              class="responsive-img-ecom"
              alt="NA"
              src="https://demo.fieldthemes.com/catalan/modules/fieldhtmlblock/images/bn4.png"
            ></img>
          </div>
        </div>
      </div>
      <div class="landing-best-products">
        <p class="landing-best-products-h1">The Best Products Of Catalan</p>
        <p class="landing-best-products-h2">FEATURE PRODUCTS</p>
        <Card products={products.slice(1, 7)} />
      </div>
      <footer class="footer">
        <div class="footer-header">GET IN TOUCH</div>
        <p class="footer-text">The logo is inspired by SERENE Airlines</p>
        <ul>
          <li class="list-item-inline">
            <a
              class="link "
              href="https://www.linkedin.com/in/sagar-dhamani-a8b066114/"
            >
              LinkedIn
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="https://twitter.com/SagarDhamani1">
              Twitter
            </a>
          </li>
          <li class="list-item-inline">
            <a class="link" href="https://github.com/sdhamani">
              Git Hub
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
