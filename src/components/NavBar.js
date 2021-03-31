import "./components.css";
export default function Nav({ route, setRoute }) {
  return (
    <nav className="navigation nav-ecom">
      {/* <div className="container" id="ham-container" onClick="myFunction(this)">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div> */}
      <ul className="list-no-bullets nav-pills">
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
