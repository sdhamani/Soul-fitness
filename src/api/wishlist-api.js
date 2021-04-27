import axios from "axios";

export default async function Getwishlist(token) {
  const url = "http://localhost:3000/wishlist";

  // let token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDg4NTM4ZjZmMGJjOTExZDhlZDdjNGIiLCJpYXQiOjE2MTk1NTI0Mzd9.gEFTw_2rKd__YasshTW26caWYLrowyYycs3Xzsv3ICk";
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
