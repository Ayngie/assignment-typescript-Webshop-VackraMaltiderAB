import { Product } from "../ts/models/Product";

let productsInCart: Product[] = JSON.parse(
  localStorage.getItem("products") || "[]"
); //hämta kundens valda lista av produkter från localstorage.
