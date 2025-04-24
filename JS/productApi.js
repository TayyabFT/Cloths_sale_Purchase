import { BASE_URL } from "./config.js";

export const getProducts = async (category) => {
  try {
    const response = await fetch(
      `${BASE_URL}/product/getProducts?category=${encodeURIComponent(category)}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products = await response.json();
    console.log("Response", products);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
