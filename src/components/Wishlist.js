import Nav from "./NavBar";
import Card from "./Card";
import useWishlist from "../context/wishlist-context";

export default function Wishlist() {
  const { wishlist, wishlistdispatch } = useWishlist();
  console.log("Hello", { wishlist });
  return (
    <div>
      {wishlist.length === 0 && (
        <p className="cart-no-items">There are no more items in your wishLis</p>
      )}
      <Card products={wishlist} />
    </div>
  );
}
