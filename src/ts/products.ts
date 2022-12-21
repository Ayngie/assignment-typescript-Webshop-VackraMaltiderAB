import { Product } from "./models/Product";

let products: Product[] = [
  new Product(
    "Stor tallrik sand",
    "Denna tallrik kommer från serien Bubbles som även innehåller fat, muggar och mycket mer.",
    "src/assets/images/StorTallrikSand.png",
    "345",
    "Tallrikar",
    "Sand"
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

    let price = document.createElement("h5");
    price.innerHTML = products[i].price + " kr";

    let addToCartBtn = document.createElement("button");
    addToCartBtn.innerHTML = "Lägg i varukorgen";
    addToCartBtn.addEventListener("click", () => {
      addToCart();
    });

    productContainer?.appendChild(product);
    product?.appendChild(title);
    product?.appendChild(image);
    product?.appendChild(description);
    product?.appendChild(detailContainer);
    product?.appendChild(price);
  }
}

function addToCart() {}

createHtml();
