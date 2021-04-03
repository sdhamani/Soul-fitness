import useCart from "../context/cart-context";

export default function Cart() {
  const { cart, dispatch } = useCart();

  const getTotalValue = (total, obj) => {
    console.log("total", total);
    console.log({ obj });
    return total + obj.quantity * obj.price;
  };

  return (
    <div>
      <div className="cart">
        <div>
          <div className="cart-products">
            <h3 className="cart-product-heading">SHOPPING CART</h3>
            <hr></hr>
            {cart.length === 0 && (
              <p className="cart-no-items">
                There are no more items in your cart
              </p>
            )}
            {cart &&
              cart.map((item) => {
                return (
                  <div className="horizontal-card horizontal-card-ecom">
                    <img
                      className="horizontal-card-image-ecom"
                      src={item.image}
                      alt="NA"
                    />
                    <div className="horizontal-data horizontal-data-ecom">
                      <p className="horizontal-card-heading-ecom">
                        {item.name}
                      </p>
                      <small className="checkout-item-color">
                        ${item.price}
                      </small>
                    </div>
                    <div className="horizontal-card-counter">
                      <button
                        className="counter-btn"
                        onClick={(e) =>
                          dispatch({ type: "ADDQUANTITY", payload: item })
                        }
                      >
                        <i class="fa fa-plus" aria-hidden="true"></i>
                      </button>
                      <p className="counter">{item.quantity} </p>
                      <button
                        className="counter-btn"
                        onClick={(e) =>
                          dispatch({ type: "SUBSQUANTITY", payload: item })
                        }
                      >
                        <i class="fa fa-minus" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="horizontal-card-total-price">
                      ${item.quantity * Number(item.price)}
                    </div>
                    <div>
                      <button
                        className="cart-delete-image"
                        onClick={(e) =>
                          dispatch({ type: "DELFROMCART", payload: item })
                        }
                      >
                        <i class="fa fa-trash fa-2x" aria-hidden="true"></i>
                      </button>
                    </div>
                    {/* <hr></hr> */}
                  </div>
                );
              })}
          </div>
          <button className="seconday-button continue-shop-btn">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>Continue Shopping
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
              <i class="fa fa-shield" aria-hidden="true"></i>Security policy
              (edit with Customer reassurance module)
            </div>
            <div className="checkout-single-policy">
              {" "}
              <i class="fa fa-car" aria-hidden="true"></i>Delivery policy (edit
              with Customer reassurance module)
            </div>
            <div className="checkout-single-policy">
              <i class="fa fa-exchange" aria-hidden="true"></i>Return policy
              (edit with Customer reassurance module
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
