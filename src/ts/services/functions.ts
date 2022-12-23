import { Product } from "../models/Product";

export function calculateSubtotal(product: Product) {
  product.subtotal = product.price * product.quantity;
}

export function calculateTotal(productsInCart: Product[]) {
  let total = 0;
  for (let i = 0; i < productsInCart.length; i++) {
    total += Number(productsInCart[i].subtotal);
  }
  return total;
}
