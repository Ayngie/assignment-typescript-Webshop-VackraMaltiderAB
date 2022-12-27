/** 

*@jest-environment jsdom 

*/
import { CartItem } from "../ts/models/CartItem";
import { Product } from "../ts/models/Product";
import { calculateSubtotal, calculateTotal } from "../ts/services/functions";

let product: Product = new Product(
  1,
  "Stor tallrik Sand",
  "Denna tallrik kommer från serien Bubbles som även innehåller fat, muggar och mycket mer.",
  "https://royaldesign.se/image/1/mateus-bubbles-tallrik-28-cm-32",
  345,
  "Tallrikar",
  "Sand",
  0
);

let productTwo: Product = new Product(
  2,
  "Liten tallrik Cinnamon",
  "En enkel och stilren tallrik tillverkad av keramik.",
  "https://royaldesign.se/image/1/mateus-basic-tallrik-25-cm-50?w=1080&quality=80",
  275,
  "Tallrikar",
  "Cinnamon",
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
