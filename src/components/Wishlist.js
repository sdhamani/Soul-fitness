import Nav from "./NavBar";
import Card from "./Card";
import useWishlist from "../context/wishlist-context";

export default function Wishlist() {
  const { wishlist, wishlistdispatch } = useWishlist();
  console.log("Hello", { wishlist });
  return (
    <div>
      <Card products={wishlist} />
    </div>
  );
}
