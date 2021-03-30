import "./components.css";
export default function Nav({ route, setRoute }) {
  return (
    <nav class="navigation nav-ecom">
      <div class="container" id="ham-container" onclick="myFunction(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <ul class="list-no-bullets nav-pills">
        <li class="list-item-inline">
          <button
            class={route === "landing" ? "link link-active" : "link"}
            onClick={(e) => {
              setRoute("landing");
            }}
          >
            Home
          </button>
        </li>
        <li class="list-item-inline">
          <button
            class={route === "products" ? "link link-active" : "link"}
            onClick={(e) => {
              setRoute("products");
            }}
          >
            Products
          </button>
        </li>
        <li class="list-item-inline">
          <button
            class={route === "wishlist" ? "link link-active" : "link"}
            onClick={(e) => setRoute("wishlist")}
          >
            Wishlist
          </button>
        </li>
        <li class="list-item-inline">
          <button
            class={route === "cart" ? "link link-active" : "link"}
            onClick={(e) => setRoute("cart")}
          >
            Cart
          </button>
        </li>
      </ul>
    </nav>
  );
}
