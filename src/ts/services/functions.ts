import { Product } from "../models/Product";

export function calculateSubtotal(product: Product) {
  product.subtotal = product.price * product.quantity;
}
