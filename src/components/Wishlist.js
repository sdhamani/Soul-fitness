import Nav from "./NavBar";
import Card from "./Card";
import useWishlist from "../context/wishlist-context";
import useData from "../context/data-context";
import { ToggleWishlistAPI } from "../api/wishlist-api";
import useLogin from "../context/login-context";
import { useState } from "react";

export default function Wishlist() {
  const { wishlist, wishlistdispatch } = useWishlist();

  const { data, setData } = useData();
  const { token } = useLogin();
  const [showalert, setShowAlert] = useState(false);

  function AlertComp() {
    // if (showalert !== "Item successfully removed from the Wishlist !!!") {
    //   return (
    //     <div className="alert">
    //       <h3 className="alert-success">
    //         <i className="fa fa-check-circle" aria-hidden="true"></i>{" "}
    //         {showalert}
    //       </h3>
    //     </div>
    //   );
    // } else {
    return (
      <div class="alert">
        <h3 class="alert-warning">
          <i className="fa fa-check-circle" aria-hidden="true"></i> {showalert}
        </h3>
      </div>
    );
    // }
  }

  const changeShowAlert = (text) => {
    setShowAlert(text);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  const updateWishlist = async (item) => {
    console.log("Updatedwired");
    console.log(item._id);
    try {
      changeShowAlert("Trying to update wishlist ");
      const response = await ToggleWishlistAPI(token, item._id);
      console.log("response", response);
      if (response.success) {
        changeShowAlert("Wishlist Updated successfully !!!");
        wishlistdispatch({
          type: "USERWISHLIST",
          payload: response.Updatedwishlist,
        });
      } else {
        console.log("Couldnt do it");
        changeShowAlert(response.message);
      }
    } catch (err) {
      changeShowAlert("Some error occurred");
      console.log(err);
    }
  };
  return (
    <div className="wishlist-page">
      {wishlist.length === 0 && (
        <p className="wishlist-no-items">
          There are no more items in your Wishlist.
        </p>
      )}
      <div className="cards cards-ecom">
        {wishlist.length > 0 &&
          wishlist.map((item) => {
            return (
              <div className="card  card-ecom" key={item.productId._id}>
                <img
                  className="card-image text-overlay-image card-image-ecom"
                  alt="NA"
                  src={item.productId.image}
                />
                <div className="card-overlay-data">
                  <button
                    className="cart-image"
                    onClick={(e) => updateWishlist(item.productId)}
                  >
                    <i
                      class="fa fa-heart red-heart fa-lg"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
                <div className="card-content card-content-ecom">
                  <div>{item.productId.ratings}</div>
                  <h4>{item.productId.name}</h4>
                  <p className="card-data card-data">${item.productId.price}</p>
                </div>
              </div>
            );
          })}
        {showalert && <AlertComp />}
      </div>
    </div>
  );
}
