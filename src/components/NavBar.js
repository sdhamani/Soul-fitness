import "./components.css";
import useCart from "../context/cart-context";
import { NavLink, useNavigate } from "react-router-dom";
import useWishlist from "../context/wishlist-context";
import { useState } from "react";
import useLogin from "../context/login-context";
import { Link } from "react-router-dom";

export default function Nav({ route, setRoute }) {
  const { cart, dispatch } = useCart();
  const { wishlist, wishlistdispatch } = useWishlist();
  const [hamDisplay, setHamDisplay] = useState(false);
  const [logoutBtn, setlogoutBtn] = useState(true);
  const { loggedIn, setloggedIn, userName } = useLogin();

  const navigate = useNavigate();

  function myFunction() {
    setHamDisplay(!hamDisplay);
  }

  function logoutFun() {
    setlogoutBtn(true);
    setloggedIn(false);
    localStorage?.setItem("login", JSON.stringify({ isUserLoggedIn: false }));
    localStorage?.setItem(
      "localUserName",
      JSON.stringify({ localUserName: "" })
    );
    localStorage?.setItem("token", JSON.stringify({ token: "" }));
    navigate("/");
    dispatch({ type: "USERCART", payload: [] });
    wishlistdispatch({ type: "USERWISHLIST", payload: [] });
  }
  return (
    <div>
      {hamDisplay && (
        <div
          onClick={(e) => setHamDisplay(!hamDisplay)}
          className="nav-cateogory-mob"
        >
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
        <h1 className="nav-heading">
          <Link className="login-actions-link" to="/">
            Soul Fitness
          </Link>
        </h1>
        <div
          className={hamDisplay ? "container change" : "container"}
          id="ham-container"
          onClick={() => myFunction()}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
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
              <div className="nav-username">Hi {userName}!</div>
              <div className="badge-div">
                <i
                  className="fa fa-user-circle fa-lg badge-icons logged-in-user"
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
            <NavLink to="/" activeClassName="nav-active-icon">
              {" "}
              <div className="badge-div">
                <i
                  className="fa fa-home fa-lg badge-icons"
                  aria-hidden="true"
                ></i>{" "}
              </div>
            </NavLink>
          </li>

          <li className="list-item-inline">
            <NavLink to="/wishlist" activeClassName="nav-active-icon">
              <div className="badge-div">
                <i className="fa fa-heart fa-lg badge-icons" aria-hidden="true">
                  {" "}
                  <span className="badge-on-icon badge-on-icon-ecom">
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
                  className="fa fa-shopping-cart fa-lg badge-icons"
                  aria-hidden="true"
                >
                  {" "}
                  <span className="badge-on-icon badge-on-icon-ecom">
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
                    className="fa fa-user-circle fa-lg badge-icons"
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
