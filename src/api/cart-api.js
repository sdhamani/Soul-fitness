import axios from "axios";

export default async function Getcart(token) {
  const url = "http://localhost:3000/cart";
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const cartObj = await axios.get(url, config);

    if (cartObj.data.success) {
      return cartObj.data.cart;
    } else {
      console.log("else", cartObj.data.message);
      return cartObj.data.message;
    }
  } catch (error) {
    console.log("error while signing user", error);
    return error;
  }
}

export async function AddToCart(token, productId) {
  const url = `http://localhost:3000/cart/${productId}`;
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const cartObj = await axios.post(url, null, config);
    console.log({ cartObj });
    if (cartObj.data.success) {
      return { success: true, updatedCart: cartObj.data.Updatedcart };
    } else {
      return { success: false, message: cartObj.data.message };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}
