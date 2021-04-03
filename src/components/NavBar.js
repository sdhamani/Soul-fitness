import "./components.css";
import useCart from "../context/cart-context";
import useWishlist from "../context/wishlist-context";
export default function Nav({ route, setRoute }) {
  const { cart, dispatch } = useCart();
  const { wishlist, wishlistdispatch } = useWishlist();
  return (
    <nav className="navigation nav-ecom">
      <h1 className="nav-heading">Soul Fitness</h1>
      <ul className="list-no-bullets nav-pills nav-list-ecom">
        <li className="list-item-inline">
          <button
            className={route === "landing" ? "link link-active" : "link"}
            onClick={(e) => {
              setRoute("landing");
            }}
          >
            <i class="fa fa-home fa-lg badge-icons" aria-hidden="true"></i>
          </button>
        </li>
        <li className="list-item-inline">
          <button
            className={route === "products" ? "link link-active" : "link"}
            onClick={(e) => {
              setRoute("products");
            }}
          >
            <i class="fa fa-product-hunt" aria-hidden="true"></i>
          </button>
        </li>
        <li className="list-item-inline">
          <button
            className={route === "wishlist" ? "link link-active" : "link"}
            onClick={(e) => setRoute("wishlist")}
          >
            <div className="badge-div">
              <i class="fa fa-heart fa-lg badge-icons" aria-hidden="true">
                {" "}
                <span class="badge-on-icon badge-on-icon-ecom">
                  {wishlist.length > 0 && wishlist.length}
                </span>
              </i>
            </div>
          </button>
        </li>
        <li className="list-item-inline">
          <button
            className={route === "cart" ? "link link-active" : "link"}
            onClick={(e) => setRoute("cart")}
          >
            <div className="badge-div">
              <i
                class="fa fa-shopping-cart fa-lg badge-icons"
                aria-hidden="true"
              >
                {" "}
                <span class="badge-on-icon badge-on-icon-ecom">
                  {cart.length > 0 && cart.length}
                </span>
              </i>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
}
