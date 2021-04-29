import axios from "axios";

export default async function Getwishlist(token) {
  const url = "https://mighty-brook-83661.herokuapp.com/wishlist";

  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const wishlistObj = await axios.get(url, config);

    if (wishlistObj.data.success) {
      return wishlistObj.data.wishlist;
    } else {
      return wishlistObj.data.message;
    }
  } catch (error) {
    console.log("error while signing user", error);
    return error;
  }
}

export async function ToggleWishlistAPI(token, productId) {
  console.log("wishlist running in api", token);

  const url = `https://mighty-brook-83661.herokuapp.com/wishlist/${productId}`;
  console.log(url);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const wishlistObj = await axios.post(url, null, config);
    console.log({ wishlistObj });
    if (wishlistObj.data.success) {
      return {
        success: true,
        Updatedwishlist: wishlistObj.data.Updatedwishlist,
      };
    } else {
      return { success: false, message: wishlistObj.data.message };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}
