import "./components.css";
export default function Nav({ route, setRoute }) {
  return (
    <nav className="navigation nav-ecom">
      <ul className="list-no-bullets nav-pills nav-list-ecom">
        <li className="list-item-inline">
          <button
            className={route === "landing" ? "link link-active" : "link"}
            onClick={(e) => {
              setRoute("landing");
            }}
          >
            Home
          </button>
        </li>
        <li className="list-item-inline">
          <button
            className={route === "products" ? "link link-active" : "link"}
            onClick={(e) => {
              setRoute("products");
            }}
          >
            Products
          </button>
        </li>
        <li className="list-item-inline">
          <button
            className={route === "wishlist" ? "link link-active" : "link"}
            onClick={(e) => setRoute("wishlist")}
          >
            Wishlist
          </button>
        </li>
        <li className="list-item-inline">
          <button
            className={route === "cart" ? "link link-active" : "link"}
            onClick={(e) => setRoute("cart")}
          >
            Cart
          </button>
        </li>
      </ul>
    </nav>
  );
}
