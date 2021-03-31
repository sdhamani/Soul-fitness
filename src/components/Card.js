import "./components.css";
import useCart from "../context/cart-context";
import useData from "../context/data-context";
export default function Card({ products }) {
  const { cart, dispatch } = useCart();
  const { data, setData } = useData();
  return (
    <div className="cards card-ecom">
      {products.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img
              className="card-image text-overlay-image"
              alt="NA"
              src={item.image}
            />
            <div className="card-overlay-data">
              <button
                className="cart-image"
                onClick={(e) => {
                  data.map((value) => 
                    value.id === item.id ? (setData({...data,value.addedToCart: true})):null 
                  );
                  return dispatch({ type: "ADDTOCART", payload: item });
                }}
              >
                {item.addedToCart ? (
                  <i class="fa fa-check-circle" aria-hidden="true"></i>
                ) : (
                  <i
                    className="fa fa-shopping-cart fa-2x"
                    aria-hidden="true"
                  ></i>
                )}
              </button>

              <button className="cart-image">
                <i className="fa fa-heart-o fa-2x"></i>
              </button>
            </div>
            <div className="card-content card-content-ecom">
              <div>{item.ratings}</div>
              <h3>{item.name}</h3>
              <h3>{item.delivery}</h3>
              <h3>{item.inStock}</h3>
              <p className="card-data card-data">{item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
