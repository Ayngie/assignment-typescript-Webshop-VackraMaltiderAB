/** 

*@jest-environment jsdom 

*/
import { CartItem } from "../ts/models/CartItem";
import { Product } from "../ts/models/Product";
import { calculateSubtotal, calculateTotal } from "../ts/services/functions";

let product: Product = new Product(
  1,
  "Stor tallrik Vit",
  "Denna tallrik kommer från serien Happy som även innehåller fat, muggar och mycket mer.",
  "https://images.unsplash.com/photo-1587334207810-4915c4e40c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80",
  "High-quality photo of a pea pod on a white background, image from Mockup Graphics on unSplash.com",
  345,
  "Tallrikar",
  "Vit",
  0
);

let productTwo: Product = new Product(
  2,
  "Liten tallrik Kanel",
  "En enkel och stilren tallrik tillverkad av keramik.",
  "https://images.unsplash.com/photo-1587334207810-4915c4e40c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80",
  "High-quality photo of a pea pod on a white background, image from Mockup Graphics on unSplash.com",
  275,
  "Tallrikar",
  "Kanel",
  0
);

test("should calculate subtotal", () => {
  // Arrange

  let cart: CartItem = new CartItem(product, 2);

  // Act
  let subtotal = calculateSubtotal(cart);
  // Assert
  expect(subtotal).toBe(690);
});

test("should calculate total", () => {
  // Arrange
  let cart: CartItem[] = [
    new CartItem(product, 1),
    new CartItem(productTwo, 2),
  ];

  // Act
  let total = calculateTotal(cart);
  // Assert
  expect(total).toBe(895);
});
