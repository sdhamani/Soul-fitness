import useCart from "../context/cart-context";
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../context/login-context";
import { UpdateCartQuantiyAPI, DeletFromCartAPI } from "../api/cart-api";

export default function Cart() {
  const { cart, dispatch } = useCart();
  const { token } = useLogin();
  const [loader, setloader] = useState(false);
  const [buttonId, setButtonId] = useState(null);

  const deleteFromCart = async (item, id) => {
    setloader(true);
    setButtonId(id);
    try {
      const response = await DeletFromCartAPI(token, item.productId._id);

      if (response.success) {
        dispatch({ type: "USERCART", payload: response.updatedCart });
      } else {
        console.log("error occurred");
      }
    } catch (err) {
      console.log(err);
    }
    setloader(false);
  };
  const updateQuanity = async (item, text, id) => {
    setloader(true);
    setButtonId(id);
    try {
      let quantity = item.quantity;
      if (text === "ADD") {
        quantity += 1;
      } else if (text === "SUB") {
        if (quantity > 1) {
          quantity -= 1;
        } else {
          deleteFromCart(item);
        }
      }
      const response = await UpdateCartQuantiyAPI(
        token,
        item.productId._id,
        quantity
      );

      if (response.success) {
        dispatch({ type: "USERCART", payload: response.updatedCart });
      } else {
        console.log("error occurred");
      }
    } catch (err) {
      console.log(err);
    }
    setloader(false);
  };
  const getTotalValue = (total, obj) => {
    return total + obj.quantity * obj.productId.price;
  };
  return (
    <div>
      {true && (
        <div className="cart">
          <div>
            <div className="cart-products">
              <h3 className="cart-product-heading">SHOPPING CART</h3>
              <hr></hr>
              {cart && cart.length === 0 && (
                <p className="cart-no-items">
                  There are no more items in your cart
                </p>
              )}
              {cart &&
                cart.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="horizontal-card horizontal-card-ecom"
                    >
                      <img
                        className="horizontal-card-image-ecom"
                        src={item.productId.image}
                        alt="NA"
                      />
                      <div className="horizontal-data horizontal-data-ecom">
                        <p className="horizontal-card-heading-ecom">
                          {item.productId.name}
                        </p>
                        <small className="checkout-item-color">
                          ${item.productId.price}
                        </small>
                      </div>
                      <div className="horizontal-card-counter">
                        <button
                          id={index}
                          className="counter-btn"
                          onClick={(e) =>
                            updateQuanity(item, "ADD", index + 10)
                          }
                        >
                          {loader && buttonId === index + 10 ? (
                            <i class="fas fa-spinner fa-spin"></i>
                          ) : (
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          )}
                        </button>
                        <p className="counter">{item.quantity} </p>
                        <button
                          id={index}
                          className="counter-btn"
                          onClick={(e) =>
                            updateQuanity(item, "SUB", index + 20)
                          }
                        >
                          {loader && buttonId === index + 20 ? (
                            <i class="fas fa-spinner fa-spin"></i>
                          ) : (
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          )}
                        </button>
                      </div>
                      <div className="horizontal-card-total-price">
                        ${item.quantity * Number(item.productId.price)}
                      </div>
                      <div>
                        <button
                          id={index}
                          className="cart-delete-image"
                          onClick={(e) => deleteFromCart(item, index)}
                        >
                          {loader && buttonId === index ? (
                            <i class="fas fa-spinner fa-spin fa-2x"></i>
                          ) : (
                            <i
                              class="fa fa-trash-o fa-2x"
                              aria-hidden="true"
                            ></i>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
            <button className="seconday-button continue-shop-btn">
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              <Link to="/mens">Continue Shopping</Link>
            </button>
          </div>

          <div className="checkout-right-div">
            <div className="checkout-card">
              <div className="checkout-top">
                <div>
                  <div className="checkout-values">{cart.length} Items </div>
                  <div className="checkout-values">Shipping</div>
                </div>
                <div>
                  <div className="checkout-values">
                    ${cart.reduce(getTotalValue, 0)}
                  </div>
                  <div className="checkout-values">$10</div>
                </div>
              </div>
              <hr></hr>
              <div className="checkout-top">
                <div>
                  <div className="checkout-values">Total (tax excl.)</div>
                  <div className="checkout-values">Taxes</div>
                </div>
                <div>
                  <div className="checkout-values">
                    ${cart.reduce(getTotalValue, 0) + 10}
                  </div>
                  <div className="checkout-values">$0.00</div>
                </div>
              </div>
              <hr></hr>
              <div className="checkout-btn-div">
                <button className="seconday-button checkout-btn">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
            <div className="checkout-policies">
              <div className="checkout-single-policy">
                {" "}
                <i className="fa fa-shield" aria-hidden="true"></i>Security
                policy (edit with Customer reassurance module)
              </div>
              <div className="checkout-single-policy">
                {" "}
                <i className="fa fa-car" aria-hidden="true"></i>Delivery policy
                (edit with Customer reassurance module)
              </div>
              <div className="checkout-single-policy">
                <i className="fa fa-exchange" aria-hidden="true"></i>Return
                policy (edit with Customer reassurance module
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
