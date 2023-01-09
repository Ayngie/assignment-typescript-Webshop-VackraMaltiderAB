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
        "Stor tallrik Vit",
        "Denna tallrik kommer från serien Bubbles som även innehåller fat, muggar och mycket mer.",
        "https://royaldesign.se/image/1/mateus-bubbles-tallrik-28-cm-32",
        "Image alt: ",
        345,
        "Tallrikar",
        "Vit",
        0
      ),
      new Product(
        2,
        "Liten tallrik Kanel",
        "En enkel och stilren tallrik tillverkad av keramik.",
        "https://images.unsplash.com/photo-1587334207810-4915c4e40c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80",
        "High-quality photo of a pea pod on a white background, image from Mockup Graphics on unSplash.com",
        275,
        "Tallrikar",
        "Kanel",
        0
      ),
      new Product(
        3,
        "Liten tallrik Vit",
        "En enkel och stilren tallrik tillverkad av keramik.",
        "https://images.unsplash.com/photo-1587334207810-4915c4e40c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80",
        "High-quality photo of a pea pod on a white background, image from Mockup Graphics on unSplash.com",
        275,
        "Tallrikar",
        "Vit",
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
        "Stor tallrik Vit",
        "Denna tallrik kommer från serien Bubbles som även innehåller fat, muggar och mycket mer.",
        "https://images.unsplash.com/photo-1587334207810-4915c4e40c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80",
        "High-quality photo of a pea pod on a white background, image from Mockup Graphics on unSplash.com",
        345,
        "Tallrikar",
        "Vit",
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
