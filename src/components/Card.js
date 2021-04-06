import "./components.css";
import { useState } from "react";
import useCart from "../context/cart-context";
import useData from "../context/data-context";
import useWishlist from "../context/wishlist-context";
export default function Card({ products }) {
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

  function AlertComp() {
    if (showalert !== "Item successfully removed from the Wishlist !!!") {
      return (
        <div className="alert">
          <h3 className="alert-success">
            <i className="fa fa-check-circle" aria-hidden="true"></i>{" "}
            {showalert}
          </h3>
        </div>
      );
    } else {
      return (
        <div class="alert">
          <h3 class="alert-warning">
            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
            {showalert}
          </h3>
        </div>
      );
    }
  }

  const addedToCart = (item) => {
    const updatedData = data.map((value) =>
      value.id === item.id ? { ...value, addedToCart: true } : value
    );
    setData(updatedData);
    dispatch({ type: "ADDTOCART", payload: item });
    changeShowAlert("Item successfully added to the Cart !!!");
  };

  const updateWishlist = (item) => {
    const updatedData = data.map((value) =>
      value.id === item.id
        ? { ...value, addedToWishlist: !value.addedToWishlist }
        : value
    );
    setData(updatedData);
    wishlistdispatch({ type: "UPDATEWISHLIST", payload: item });
    item.addedToWishlist
      ? changeShowAlert("Item successfully removed from the Wishlist !!!")
      : changeShowAlert("Item successfully added to the Wishlist !!!");
  };

  return (
    <div>
      <div className="cards cards-ecom">
        {products.map((item) => {
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
                  disabled={item.addedToCart}
                >
                  {item.addedToCart ? (
                    <i class="fa fa-check-circle fa-lg" aria-hidden="true"></i>
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
                  {item.addedToWishlist ? (
                    <i
                      class="fa fa-heart red-heart fa-lg"
                      aria-hidden="true"
                    ></i>
                  ) : (
                    <i class="fa fa-heart-o fa-lg" aria-hidden="true"></i>
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
        })}
        {showalert && <AlertComp />}
      </div>
    </div>
  );
}
