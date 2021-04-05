import Nav from "./NavBar";
import Card from "./Card";
import useWishlist from "../context/wishlist-context";
import useData from "../context/data-context";

export default function Wishlist() {
  const { wishlist, wishlistdispatch } = useWishlist();

  const { data, setData } = useData();

  const updateWishlist = (item) => {
    console.log("Updatedwired");
    const updatedData = data.map((value) =>
      value.id === item.id
        ? { ...value, addedToWishlist: !value.addedToWishlist }
        : value
    );
    setData(updatedData);
    wishlistdispatch({ type: "UPDATEWISHLIST", payload: item });
  };
  return (
    <div>
      {wishlist.length === 0 && (
        <p className="wishlist-no-items">
          There are no more items in your wishLis
        </p>
      )}
      <div className="cards cards-ecom">
        {wishlist.map((item) => {
          return (
            <div className="card  card-ecom" key={item.id}>
              <img
                className="card-image text-overlay-image card-image-ecom"
                alt="NA"
                src={item.image}
              />
              <div className="card-overlay-data">
                <button
                  className="cart-image"
                  onClick={(e) => updateWishlist(item)}
                >
                  Remove from Wishlist
                  <i class="fa fa-heart red-heart fa-lg" aria-hidden="true"></i>
                </button>
              </div>
              <div className="card-content card-content-ecom">
                <div>{item.ratings}</div>
                <h4>{item.name}</h4>
                <p className="card-data card-data">${item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
