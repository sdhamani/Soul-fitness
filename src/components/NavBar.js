import "./components.css";
import useCart from "../context/cart-context";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import useWishlist from "../context/wishlist-context";
import { useState } from "react";
export default function Nav({ route, setRoute }) {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [hamDisplay, setHamDisplay] = useState(false);
  console.log("ham", hamDisplay);

  function myFunction() {
    console.log("hamfun", hamDisplay);
    setHamDisplay(!hamDisplay);
  }
  return (
    <div>
      {hamDisplay && (
        <div className="nav-cateogory-mob">
          <NavLink to="/mens" activeClassName="nav-active">
            MEN
          </NavLink>
          <NavLink to="/womens" activeClassName="nav-active">
            WOMEN
          </NavLink>
          <NavLink to="/equipments" activeClassName="nav-active">
            EQUIPMENT
          </NavLink>
        </div>
      )}
      <nav className="navigation nav-ecom">
        <h1 className="nav-heading">Soul Fitness</h1>
        <div
          class={hamDisplay ? "container change" : "container"}
          id="ham-container"
          onClick={() => myFunction()}
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        <div className="nav-cateogory">
          <NavLink to="/mens" activeClassName="nav-active">
            MEN
          </NavLink>
          <NavLink to="/womens" activeClassName="nav-active">
            WOMEN
          </NavLink>
          <NavLink to="/equipments" activeClassName="nav-active">
            EQUIPMENT
          </NavLink>
        </div>

        <ul className="list-no-bullets nav-pills nav-list-ecom">
          <li className="list-item-inline">
            <NavLink to="/home" activeClassName="nav-active-icon">
              {" "}
              <div className="badge-div">
                <i class="fa fa-home fa-lg badge-icons" aria-hidden="true"></i>{" "}
              </div>
            </NavLink>
          </li>

          <li className="list-item-inline">
            <NavLink to="/wishlist" activeClassName="nav-active-icon">
              <div className="badge-div">
                <i class="fa fa-heart fa-lg badge-icons" aria-hidden="true">
                  {" "}
                  <span class="badge-on-icon badge-on-icon-ecom">
                    {wishlist.length > 0 && wishlist.length}
                  </span>
                </i>
              </div>
            </NavLink>
          </li>

          <li className="list-item-inline">
            <NavLink to="/cart" activeClassName="nav-active-icon">
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
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink to="/cart" activeClassName="nav-active-icon">
              <div className="badge-div">
                <i
                  class="fa fa-user-circle fa-lg badge-icons"
                  aria-hidden="true"
                >
                  {" "}
                  {/* <span class="badge-on-icon badge-on-icon-ecom">
                    {cart.length > 0 && cart.length}
                  </span> */}
                </i>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
