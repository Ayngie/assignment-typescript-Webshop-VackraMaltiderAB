import { iteratee } from "cypress/types/lodash";
import { CartItem } from "./models/CartItem";
import { Product } from "./models/Product";
//localStorage.clear();

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
  new Product(
    4,
    "Liten tallrik Viol",
    "En enkel och stilren tallrik tillverkad av keramik.",
    "https://royaldesign.se/image/1/mateus-basic-tallrik-25-cm-42?w=1080&quality=80",
    275,
    "Tallrikar",
    "Viol",
    0
  ),
  new Product(
    5,
    "Stor tallrik Cinnamon",
    "Denna tallrik kommer från serien Bubbles som även innehåller fat, muggar och mycket mer.",
    "https://royaldesign.se/image/1/mateus-bubbles-tallrik-28-cm-47?w=1080&quality=80",
    345,
    "Tallrikar",
    "Cinnamon",
    0
  ),
  new Product(
    6,
    "Stor tallrik Viol",
    "Denna tallrik kommer från serien Bubbles som även innehåller fat, muggar och mycket mer.",
    "https://royaldesign.se/image/1/mateus-bubbles-tallrik-28-cm-39?w=1080&quality=80",
    345,
    "Tallrikar",
    "Viol",
    0
  ),
];

//Filter Products

let filterBtnOne: HTMLInputElement = document.getElementById(
  "allaProdukter"
) as HTMLInputElement;
let filterBtnTwo = document.getElementById("storTallrik") as HTMLInputElement;
let filterBtnThree = document.getElementById(
  "litenTallrik"
) as HTMLInputElement;
let filterBtnFour = document.getElementById("muggar") as HTMLInputElement;

let selectedFilter: string = "";

filterBtnOne?.addEventListener("click", () => {
  selectedFilter = "Alla Produkter";
  console.log("Alla Produkter"); //test
});

filterBtnTwo?.addEventListener("click", () => {
  selectedFilter = "Stor Tallrik";
  console.log("Stor Tallrik"); //test
});

filterBtnThree?.addEventListener("click", () => {
  selectedFilter = "Litten Tallrik";
  console.log("Liten Tallrik"); //test
});

filterBtnFour?.addEventListener("click", () => {
  selectedFilter = "Muggar";
  console.log("Muggar");
});

export function createHtml(products: Product[]) {
  let productContainer = document.getElementById("product-container");

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
    // addToCartBtn.classList.add("btn btn-light"); //bootstrap klass
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
    for (let i = 0; i < shoppingCart.length; i++) {
      if (product === shoppingCart[i].product) {
        foundItem = true;
        index = shoppingCart.indexOf(shoppingCart[i]);
        quantity = shoppingCart[i].quantity;
      }
    }
    if (foundItem) {
      shoppingCart.splice(index, 1);
      quantity++;

      let productToCart: CartItem = new CartItem(product, quantity);

      shoppingCart.push(productToCart);

      let savedCart = JSON.stringify(shoppingCart);

      localStorage.setItem("varukorg", savedCart);
    } else {
      let quantity = 0;
      quantity++;
      let productToCart: CartItem = new CartItem(product, quantity);

      shoppingCart.push(productToCart);

      let savedCart = JSON.stringify(shoppingCart);

      localStorage.setItem("varukorg", savedCart);
    }
  } else {
    let quantity = 0;
    quantity++;
    let productToCart: CartItem = new CartItem(product, quantity);

    shoppingCart.push(productToCart);

    let savedCart = JSON.stringify(shoppingCart);

    localStorage.setItem("varukorg", savedCart);
  }
}

createHtml(products);
