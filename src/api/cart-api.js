import axios from "axios";

export async function UpdateCartQuantiyAPI(token, productId, quantity) {
  const url = `https://mighty-brook-83661.herokuapp.com/cart/${productId}/${quantity}`;
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const cartObj = await axios.post(url, null, config);

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
  const url = "https://mighty-brook-83661.herokuapp.com/cart";
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
      return cartObj.data.message;
    }
  } catch (error) {
    return error;
  }
}

export async function AddToCartAPI(token, productId) {
  const url = `https://mighty-brook-83661.herokuapp.com/cart/${productId}`;
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const cartObj = await axios.post(url, null, config);

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
  const url = `https://mighty-brook-83661.herokuapp.com/cart/${productId}`;
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };
    const cartObj = await axios.delete(url, config);

    if (cartObj.data.success) {
      return { success: true, updatedCart: cartObj.data.Updatedcart };
    } else {
      return { success: false, message: cartObj.data.message };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}
