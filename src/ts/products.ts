import { Product } from "./models/Product";

let shoppingCart: Product[] = [];

let products: Product[] = [
  new Product(
    "Stor tallrik Sand",
    "Denna tallrik kommer från serien Bubbles som även innehåller fat, muggar och mycket mer.",
    "https://royaldesign.se/image/1/mateus-bubbles-tallrik-28-cm-32",
    "345",
    "Tallrikar",
    "Sand"
  ),
  new Product(
    "Liten tallrik Cinnamon",
    "En enkel och stilren tallrik tillverkad av keramik.",
    "https://royaldesign.se/image/1/mateus-basic-tallrik-25-cm-50?w=1080&quality=80",
    "275",
    "Tallrikar",
    "Cinnamon"
  ),
  new Product(
    "Liten tallrik Sand",
    "En enkel och stilren tallrik tillverkad av keramik.",
    "https://royaldesign.se/image/1/mateus-basic-tallrik-25-cm-33?w=1080&quality=80",
    "275",
    "Tallrikar",
    "Sand"
  ),
  new Product(
    "Liten tallrik Viol",
    "En enkel och stilren tallrik tillverkad av keramik.",
    "https://royaldesign.se/image/1/mateus-basic-tallrik-25-cm-42?w=1080&quality=80",
    "275",
    "Tallrikar",
    "Viol"
  ),
  new Product(
    "Stor tallrik Cinnamon",
    "Denna tallrik kommer från serien Bubbles som även innehåller fat, muggar och mycket mer.",
    "https://royaldesign.se/image/1/mateus-bubbles-tallrik-28-cm-47?w=1080&quality=80",
    "345",
    "Tallrikar",
    "Cinnamon"
  ),
  new Product(
    "Stor tallrik Viol",
    "Denna tallrik kommer från serien Bubbles som även innehåller fat, muggar och mycket mer.",
    "https://royaldesign.se/image/1/mateus-bubbles-tallrik-28-cm-39?w=1080&quality=80",
    "345",
    "Tallrikar",
    "Viol"
  ),
];

function createHtml() {
  let productContainer = document.getElementById("product-container");

  for (let i = 0; i < products.length; i++) {
    let product = document.createElement("div");
    product.id = "product";
    product.classList.add("product");

    let title = document.createElement("h3");
    title.innerHTML = products[i].title;

    let image = document.createElement("img");
    image.src = products[i].imgUrl;
    image.width = 200;

    let description = document.createElement("p");
    description.innerHTML = products[i].description;

    let detailContainer = document.createElement("div");
    detailContainer.id = "detail-container";
    detailContainer.classList.add("detail-container");

    let category = document.createElement("p");
    category.innerHTML = products[i].category;

    let color = document.createElement("p");
    color.innerHTML = products[i].color;

    detailContainer.appendChild(category);
    detailContainer.appendChild(color);

    let priceBtnContainer = document.createElement("div");
    priceBtnContainer.classList.add("price-btn-container");

    let price = document.createElement("h5");
    price.innerHTML = products[i].price + " kr";

    let addToCartBtn = document.createElement("button");
    addToCartBtn.innerHTML = "Lägg i varukorgen";
    addToCartBtn.addEventListener("click", () => {
      addToCart(products[i]);
    });

    productContainer?.appendChild(product);
    product.appendChild(title);
    product.appendChild(image);
    product.appendChild(description);
    product.appendChild(detailContainer);
    product.appendChild(priceBtnContainer);
    priceBtnContainer?.appendChild(price);
    priceBtnContainer.appendChild(addToCartBtn);
  }
}

function addToCart(product: Product) {
  alert("Du klickade");
  let productToCart = product;
  shoppingCart.push(productToCart);

  let savedCart = JSON.stringify(shoppingCart);

  localStorage.setItem("varukorg", savedCart);
}

createHtml();
