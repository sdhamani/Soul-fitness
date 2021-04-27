import axios from "axios";

export default async function GetProducts() {
  const url = "http://localhost:3000/products";
  try {
    const productsObj = await axios.get(url);
    if (productsObj.data.success) {
      return { success: true, products: productsObj.data.products };
    } else {
      return { success: false, error: productsObj.data.message };
    }
  } catch (error) {
    console.log("Error while fetching products", error);
    return { success: false, error: error };
  }
}
