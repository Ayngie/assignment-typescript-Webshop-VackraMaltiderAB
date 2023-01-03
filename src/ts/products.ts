import { iteratee } from "cypress/types/lodash";
import { CartItem } from "./models/CartItem";
import { Product } from "./models/Product";
// localStorage.clear();

let shoppingCart: CartItem[] = JSON.parse(
  localStorage.getItem("varukorg") || "[]"
);

let products: Product[] = [
  new Product(
    1,
    "Stor tallrik Sand",
    "Denna tallrik kommer från serien Bubbles som även innehåller fat, muggar och mycket mer.",
    "https://royaldesign.se/image/1/mateus-bubbles-tallrik-28-cm-32",
    345,
    "Stor tallrik",
    "Sand",
    0
  ),
  new Product(
    2,
    "Stor tallrik Cinnamon",
    "Denna tallrik kommer från serien Bubbles som även innehåller fat, muggar och mycket mer.",
    "https://royaldesign.se/image/1/mateus-bubbles-tallrik-28-cm-47?w=1080&quality=80",
    345,
    "Stor tallrik",
    "Cinnamon",
    0
  ),
  new Product(
    3,
    "Stor tallrik Viol",
    "Denna tallrik kommer från serien Bubbles som även innehåller fat, muggar och mycket mer.",
    "https://royaldesign.se/image/1/mateus-bubbles-tallrik-28-cm-39?w=1080&quality=80",
    345,
    "Stor tallrik",
    "Viol",
    0
  ),
  new Product(
    4,
    "Liten tallrik Sand",
    "En enkel och stilren tallrik tillverkad av keramik.",
    "https://royaldesign.se/image/1/mateus-basic-tallrik-25-cm-33?w=1080&quality=80",
    275,
    "Liten tallrik",
    "Sand",
    0
  ),
  new Product(
    5,
    "Liten tallrik Cinnamon",
    "En enkel och stilren tallrik tillverkad av keramik.",
    "https://royaldesign.se/image/1/mateus-basic-tallrik-25-cm-50?w=1080&quality=80",
    275,
    "Liten tallrik",
    "Cinnamon",
    0
  ),
  new Product(
    6,
    "Liten tallrik Viol",
    "En enkel och stilren tallrik tillverkad av keramik.",
    "https://royaldesign.se/image/1/mateus-basic-tallrik-25-cm-42?w=1080&quality=80",
    275,
    "Liten tallrik",
    "Viol",
    0
  ),
  new Product(
    7,
    "Bubbles Mugg Sand",
    "Den här muggen har ett bubbligt mönster som gör den både charmig och lätt att hålla i handen. Den är tillverkad av keramik och målad för hand vilket gör att varje mugg unik.",
    "https://royaldesign.se/image/1/mateus-bubbles-mugg-30-cl-42?w=1600&quality=80",
    345,
    "Muggar",
    "Sand",
    0
  ),
  new Product(
    8,
    "Bubbles Mugg Cinnamon",
    "Den här muggen har ett bubbligt mönster som gör den både charmig och lätt att hålla i handen. Den är tillverkad av keramik och målad för hand vilket gör att varje mugg unik.",
    "https://royaldesign.se/image/1/mateus-bubbles-mugg-30-cl-63?w=1600&quality=80",
    345,
    "Muggar",
    "Cinnamon",
    0
  ),
  new Product(
    9,
    "Bubbles Mugg Viol",
    "Den här muggen har ett bubbligt mönster som gör den både charmig och lätt att hålla i handen. Den är tillverkad av keramik och målad för hand vilket gör att varje mugg unik.",
    "https://royaldesign.se/image/1/mateus-bubbles-mugg-30-cl-53?w=1600&quality=80",
    345,
    "Muggar",
    "Viol",
    0
  ),
];

export function createHtml(products: Product[]) {
  let productContainer: HTMLDivElement = document.getElementById(
    "product-container"
  ) as HTMLDivElement;

  productContainer.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    let product = document.createElement("div");
    product.id = "product";
    product.classList.add("product");

    let title = document.createElement("h3");
    title.innerHTML = products[i].title;

    let image = document.createElement("img");
    image.src = products[i].imgUrl;
    image.alt = products[i].title;
    image.width = 200;

    let description = document.createElement("p");
    description.innerHTML = products[i].description;
    description.classList.add("description-pTag");

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
    addToCartBtn.id = "addToCartBtn";
    addToCartBtn.classList.add("add-to-cart-btn");
    addToCartBtn.innerHTML = "Lägg i varukorgen";
    addToCartBtn.addEventListener("click", () => {
      exports.addToCart(products[i]);
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

export function addToCart(product: Product) {
  let foundItem: boolean = false;
  let index: number = 0;
  let quantity: number = 0;
  if (shoppingCart.length > 0) {
    //om listan är större än noll.
    for (let i = 0; i < shoppingCart.length; i++) {
      if (product === shoppingCart[i].product) {
        foundItem = true;
        index = shoppingCart.indexOf(shoppingCart[i]);
        quantity = shoppingCart[i].quantity;
      }
    }
    if (foundItem) {
      //om produkten fanns i listan.
      shoppingCart.splice(index, 1);
      quantity++;

      let productToCart: CartItem = new CartItem(product, quantity);

      shoppingCart.push(productToCart);

      let savedCart = JSON.stringify(shoppingCart);

      localStorage.setItem("varukorg", savedCart);
    } else {
      //om produkten inte fanns i listan.
      let quantity = 0;
      quantity++;
      let productToCart: CartItem = new CartItem(product, quantity);

      shoppingCart.push(productToCart);

      let savedCart = JSON.stringify(shoppingCart);

      localStorage.setItem("varukorg", savedCart);
    }
  } else {
    //om listan var tom.
    let quantity = 0;
    quantity++;
    let productToCart: CartItem = new CartItem(product, quantity);

    shoppingCart.push(productToCart);

    let savedCart = JSON.stringify(shoppingCart);

    localStorage.setItem("varukorg", savedCart);
  }
}

createHtml(products);

//Filter Products

let filterBtnOne = document.getElementById(
  "allaProdukter"
) as HTMLButtonElement;
let filterBtnTwo = document.getElementById("storTallrik") as HTMLButtonElement;
let filterBtnThree = document.getElementById(
  "litenTallrik"
) as HTMLButtonElement;
let filterBtnFour = document.getElementById("muggar") as HTMLButtonElement;

let selectedFilter: string = "";

filterBtnOne.addEventListener("click", () => {
  selectedFilter = "Alla produkter";
  filterAlternatives(products);
});

filterBtnTwo.addEventListener("click", () => {
  selectedFilter = "Stor tallrik";
  filterAlternatives(products);
  console.log(selectedFilter);
});

filterBtnThree.addEventListener("click", () => {
  selectedFilter = "Liten tallrik";
  filterAlternatives(products);
  console.log(selectedFilter);
});

filterBtnFour.addEventListener("click", () => {
  selectedFilter = "Muggar";
  filterAlternatives(products);
  console.log(selectedFilter);
});

function filterAlternatives(products: Product[]) {
  let filteredList = products.filter((porslin) => {
    return porslin.category === selectedFilter;
  });

  if (selectedFilter === "Alla produkter") {
    createHtml(products);
    console.log("All products are able to be seen");
  } else {
    createHtml(filteredList);
  }
}
