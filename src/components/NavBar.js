import "./components.css";
import useCart from "../context/cart-context";
import { NavLink, useNavigate } from "react-router-dom";
import useWishlist from "../context/wishlist-context";
import { useState } from "react";
import useLogin from "../context/login-context";

export default function Nav({ route, setRoute }) {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [hamDisplay, setHamDisplay] = useState(false);
  const [logoutBtn, setlogoutBtn] = useState(true);
  const { loggedIn, setloggedIn } = useLogin();
  const navigate = useNavigate();

  function myFunction() {
    console.log("hamfun", hamDisplay);
    setHamDisplay(!hamDisplay);
  }

  function logoutFun() {
    setloggedIn(false);
    localStorage?.setItem("login", JSON.stringify({ isUserLoggedIn: false }));
    navigate("/");
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
        {loggedIn && (
          <div>
            <div
              className="loggenin-Name"
              onClick={(e) => setlogoutBtn(!logoutBtn)}
            >
              <div className="nav-username">Hi Sagar !</div>
              <div className="badge-div">
                <i
                  class="fa fa-user-circle fa-lg badge-icons logged-in-user"
                  aria-hidden="true"
                >
                  {" "}
                </i>
              </div>
            </div>
            <div
              onClick={(e) => logoutFun()}
              className={
                logoutBtn ? "logout-btn-div  nodisplay " : "logout-btn-div"
              }
            >
              <button className="logout_btn btn">Logout</button>
            </div>
          </div>
        )}

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
          {!loggedIn && (
            <li className="list-item-inline">
              <NavLink to="/login" activeClassName="nav-active-icon">
                <div className="badge-div">
                  <i
                    class="fa fa-user-circle fa-lg badge-icons"
                    aria-hidden="true"
                  >
                    {" "}
                  </i>
                </div>
              </NavLink>
            </li>
          )}
          <li></li>
        </ul>
      </nav>
    </div>
  );
}
