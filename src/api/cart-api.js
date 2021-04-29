import axios from "axios";

export async function UpdateCartQuantiyAPI(token, productId, quantity) {
  console.log("Update quantity running in api", token);
  const url = `http://localhost:3000/cart/${productId}/${quantity}`;
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

export default async function Getcart(token) {
  console.log("Getting cart");
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

export async function AddToCartAPI(token, productId) {
  console.log("ATC running in api", token);
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

export async function DeletFromCartAPI(token, productId) {
  console.log("DFC running in api", token);
  const url = `http://localhost:3000/cart/${productId}`;
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const cartObj = await axios.delete(url, config);
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
