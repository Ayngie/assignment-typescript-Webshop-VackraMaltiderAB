/** 

*@jest-environment jsdom 

*/
import { Product } from "../ts/models/Product";
import { calculateSubtotal, calculateTotal } from "../ts/services/functions";

test("should calculate subtotal", () => {
  // Arrange
  let product: Product = new Product(
    1,
    "Stor tallrik Sand",
    "Denna tallrik kommer från serien Bubbles som även innehåller fat, muggar och mycket mer.",
    "https://royaldesign.se/image/1/mateus-bubbles-tallrik-28-cm-32",
    345,
    "Tallrikar",
    "Sand",
    2,
    0
  );

  // Act
  calculateSubtotal(product);
  // Assert
  expect(product.subtotal).toBe(690);
});

test("should calculate total", () => {
  // Arrange
  let products: Product[] = [
    new Product(
      1,
      "Stor tallrik Sand",
      "Denna tallrik kommer från serien Bubbles som även innehåller fat, muggar och mycket mer.",
      "https://royaldesign.se/image/1/mateus-bubbles-tallrik-28-cm-32",
      345,
      "Tallrikar",
      "Sand",
      2,
      690
    ),
    new Product(
      2,
      "Liten tallrik Cinnamon",
      "En enkel och stilren tallrik tillverkad av keramik.",
      "https://royaldesign.se/image/1/mateus-basic-tallrik-25-cm-50?w=1080&quality=80",
      275,
      "Tallrikar",
      "Cinnamon",
      1,
      275
    ),
  ];

  // Act
  let total = calculateTotal(products);
  // Assert
  expect(total).toBe(965);
});
