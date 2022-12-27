import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";

export function calculateSubtotal(product: CartItem) {
  let subtotal = product.product.price * product.quantity;
  return subtotal;
}

export function calculateTotal(productsInCart: CartItem[]) {
  let total = 0;
  for (let i = 0; i < productsInCart.length; i++) {
    total += Number(calculateSubtotal(productsInCart[i]));
  }
  return total;
}
