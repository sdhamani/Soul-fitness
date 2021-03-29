import uuid from "uuid-random";

const products = [
  {
    id: uuid(),
    name: "Sneaker",
    image:
      "https://cdn.shopify.com/s/files/1/0264/4469/3589/products/sp1.jpg?v=1586338120",
    price: "$432.00",
    inStock: "Instock",
    delivery: "Prime",
    ratings: "🌟 🌟 🌟 🌟",
    offer: "Save 50",
    idealFor: "Men",
    level: "beginner",
    color: "white",
  },
  {
    id: uuid(),
    name: "Enamel Coated Cast Iron Kettlebell",
    image:
      "https://cdn.shopify.com/s/files/1/0264/4469/3589/products/2.jpg?v=1586854907",
    price: "$120.00",
    inStock: "Instock",
    delivery: "3 Days",
    ratings: "🌟 🌟 🌟 🌟 🌟",
    offer: "Save 50",
    idealFor: "Men",
    level: "beginner",
    color: "Black",
  },
  {
    id: uuid(),
    name: "Vesey Leggings V2",
    image:
      "https://cdn.shopify.com/s/files/1/0264/4469/3589/products/pro48.jpg?v=1586317317",
    price: "$302.00",
    inStock: "Out of Stock",
    delivery: "Normal",
    ratings: "🌟 🌟 🌟 🌟 🌟",
    offer: "Save 50",
    idealFor: "Women",
    level: "beginner",
    color: "Black",
  },
  {
    id: uuid(),
    name: "Tribeca Sweatpants",
    image:
      "https://cdn.shopify.com/s/files/1/0264/4469/3589/products/pro48.jpg?v=1586317317",
    price: "$96.00",
    inStock: "Instock",
    delivery: "Normal",
    ratings: "🌟 🌟 🌟 🌟 🌟",
    offer: "Save 50",
    idealFor: "Men",
    level: "beginner",
    color: "White",
  },
  {
    id: uuid(),
    name: "Treadmill Running Machine",
    image:
      "https://cdn.shopify.com/s/files/1/0264/4469/3589/products/pro8.jpg?v=1586317294",
    price: "$365.00",
    inStock: "Instock",
    delivery: "Normal",
    ratings: "🌟 🌟 🌟 🌟 🌟",
    offer: "Save 50",
    idealFor: "Men and Women",
    level: "beginner",
    color: "White-Blue",
  },
  {
    id: uuid(),
    name: "Sugar Hill Bra",
    image:
      "https://cdn.shopify.com/s/files/1/0264/4469/3589/products/pro52.jpg?v=1586317313",
    price: "$180.00",
    inStock: "Out of Stock",
    delivery: "Normal",
    ratings: "🌟 🌟 🌟 🌟 🌟",
    offer: "Save 50",
    idealFor: "Women",
    level: "beginner",
    color: "White-Blue",
  },
  {
    id: uuid(),
    name: "Push Up Bar",
    image:
      "https://cdn.shopify.com/s/files/1/0264/4469/3589/products/sp5.jpg?v=1586338541",
    price: "$325.00",
    inStock: "Instock",
    delivery: "Normal",
    ratings: "🌟 🌟 🌟",
    offer: "Save 50",
    idealFor: "Men and Women",
    level: "beginner",
    color: "Black-Orange",
  },
];

export default products;
