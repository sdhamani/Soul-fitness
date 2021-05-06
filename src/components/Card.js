import "./components.css";
import { useState } from "react";
import useCart from "../context/cart-context";
import useData from "../context/data-context";
import useWishlist from "../context/wishlist-context";
import useLogin from "../context/login-context";
import { AddToCartAPI } from "../api/cart-api";
import { ToggleWishlistAPI } from "../api/wishlist-api";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Card({ products }) {
  const navigate = useNavigate();
  const { token, loggedIn } = useLogin();
  const { cart, dispatch } = useCart();

  const { data, setData } = useData();

  const { wishlist, wishlistdispatch } = useWishlist();

  const [showalert, setShowAlert] = useState(false);

  const changeShowAlert = (text) => {
    setShowAlert(text);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const signinAlert = (text) => {
    setShowAlert(text);
    setTimeout(() => {
      setShowAlert(false);
      navigate("/login");
    }, 2000);
  };

  function AlertComp() {
    return (
      <div className="alert">
        <h3 className="alert-warning">
          {/* <i className="fa fa-exclamation-circle" aria-hidden="true"></i> */}
          {showalert}
        </h3>
      </div>
    );
  }

  const addedToCart = async (item) => {
    
    try {
      if (loggedIn) {
        changeShowAlert("Product is getting added to the cart !!!");
        const response = await AddToCartAPI(token, item._id);

        if (response.success) {
          const updatedData = data.map((value) =>
            value.id === item.id ? { ...value, addedToCart: true } : value
          );
          setData(updatedData);
          changeShowAlert("Item successfully added to the Cart !!!");
          dispatch({ type: "USERCART", payload: response.updatedCart });
        } else {
          changeShowAlert(response.message);
        }
      } else {
        signinAlert("You need to sign it first");
      }
    } catch (err) {
      changeShowAlert("Some error occurred");
      console.log(err);
    }
  };

  const updateWishlist = async (item) => {
    try {
      if (loggedIn) {
        changeShowAlert("Product is getting updated in the wishlist !!!");
        const response = await ToggleWishlistAPI(token, item._id);

        if (response.success) {
          changeShowAlert("Wishlist Updated successfully !!!");
          wishlistdispatch({
            type: "USERWISHLIST",
            payload: response.Updatedwishlist,
          });
        } else {
          changeShowAlert(response.message);
        }
      } else {
        signinAlert("You need to sign it first");
      }
    } catch (err) {
      changeShowAlert("Some error occurred");
      console.log(err);
    }
  };

  return (
    <div>
      <div className="cards cards-ecom">
        {products ? (
          products.map((item) => {
            return (
              <div className="card card-ecom" key={item.id}>
                <img
                  className="card-image text-overlay-image card-image-ecom"
                  alt="NA"
                  src={item.image}
                />
                <div className="card-overlay-data">
                  <button
                    className="cart-image"
                    onClick={(e) => addedToCart(item)}
                    // disabled={item.addedToCart}
                  >
                    {cart.length > 0 &&
                    cart.find(
                      (product) => product.productId._id === item._id
                    ) ? (
                      <i
                        className="fa fa-check-circle fa-lg"
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i
                        className="fa fa-shopping-cart fa-lg"
                        aria-hidden="true"
                      ></i>
                    )}
                  </button>

                  <button
                    className="cart-image"
                    onClick={(e) => updateWishlist(item)}
                  >
                    {cart.length > 0 &&
                    wishlist.find(
                      (product) => product.productId._id === item._id
                    ) ? (
                      <i
                        className="fa fa-heart red-heart fa-lg"
                        aria-hidden="true"
                      ></i>
                    ) : (
                      <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
                    )}
                  </button>
                </div>
                <div className="card-content card-content-ecom">
                  <div>{item.ratings}</div>
                  <h4>{item.name}</h4>
                  <div className="card-lighter-data">
                    {item.delivery} Delivery
                  </div>
                  <div className="card-lighter-data">{item.inStock}</div>
                  <p className="card-data card-data">${item.price}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="loading-products">Loading Products</div>
        )}
        {showalert && <AlertComp />}
      </div>
    </div>
  );
}
