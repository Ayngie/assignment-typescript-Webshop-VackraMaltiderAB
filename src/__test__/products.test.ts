/** 

*@jest-environment jsdom 

*/

import { test, expect, describe, jest } from "@jest/globals";
import { Product } from "../ts/models/Product";
import * as functions from "../ts/products";

describe("createHtml", () => {
  test("should show products", () => {
    //Arrange
    let products: Product[] = [
      new Product(
        1,
        "Stor tallrik Sand",
        "Denna tallrik kommer från serien Bubbles som även innehåller fat, muggar och mycket mer.",
        "https://royaldesign.se/image/1/mateus-bubbles-tallrik-28-cm-32",
        345,
        "Tallrikar",
        "Sand",
        0
      ),
      new Product(
        2,
        "Liten tallrik Cinnamon",
        "En enkel och stilren tallrik tillverkad av keramik.",
        "https://royaldesign.se/image/1/mateus-basic-tallrik-25-cm-50?w=1080&quality=80",
        275,
        "Tallrikar",
        "Cinnamon",
        0
      ),
      new Product(
        3,
        "Liten tallrik Sand",
        "En enkel och stilren tallrik tillverkad av keramik.",
        "https://royaldesign.se/image/1/mateus-basic-tallrik-25-cm-33?w=1080&quality=80",
        275,
        "Tallrikar",
        "Sand",
        0
      ),
    ];

    document.body.innerHTML = `<div id="product-container" class="product-container"></div>`;
    let productContainer = document.getElementById("product-container");

    //Act
    functions.createHtml(products);
    //Assert
    expect(productContainer?.innerHTML).toContain("h3");
    expect(productContainer?.innerHTML).toContain("img");
  });

  test("should call addToCart", () => {
    // Arrange
    let spy = jest.spyOn(functions, "addToCart").mockReturnValue();
    document.body.innerHTML = `<div class="buttons">
    <button type="button" class="button-value" id="allaProdukter">
      Alla produkter
    </button>

    <button type="button" class="button-value" id="storTallrik">
      Stor Tallrik
    </button>

    <button type="button" class="button-value" id="litenTallrik">
      Liten Tallrik
    </button>

    <button type="button" class="button-value" id="muggar">Muggar</button>
  </div><div id="product-container" class="product-container"></div>`;
    let products: Product[] = [
      new Product(
        1,
        "Stor tallrik Sand",
        "Denna tallrik kommer från serien Bubbles som även innehåller fat, muggar och mycket mer.",
        "https://royaldesign.se/image/1/mateus-bubbles-tallrik-28-cm-32",
        345,
        "Tallrikar",
        "Sand",
        0
      ),
    ];
    functions.createHtml(products);

    // Act
    document.getElementById("addToCartBtn")?.click();

    // Assert
    expect(spy).toHaveBeenCalled();
  });
});
