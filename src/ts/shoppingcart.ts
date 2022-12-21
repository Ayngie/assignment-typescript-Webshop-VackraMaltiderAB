import { Product } from "../ts/models/Product";

window.onload = function () {
  createHtml(productsInCart);
};

//hämta kundens lista av produkter från localstorage.
let productsInCart: Product[] = JSON.parse(
  localStorage.getItem("products") || "[]"
);

//funktion för att visa upp varukorgen i html
const createHtml = (productsInCart: Product[]) => {
  let container: HTMLDivElement = document.getElementById(
    "varukorg-container"
  ) as HTMLDivElement; //hämta container för varukorgens produkter att läggas in i.

  container.innerHTML = ""; //rensa innehåll

  for (let i = 0; i < productsInCart.length; i++) {
    //skapa upp variabler för objektet
    let productItem = document.createElement("div");
    let title = document.createElement("h3");
    let description = document.createElement("p");
    let img = document.createElement("img");
    let price = document.createElement("p");
    let category = document.createElement("p");
    let color = document.createElement("p");

    //ge variablerna värde/innehåll
    productItem.classList.add("productItem"); //klass för senare styling
    title.innerHTML = productsInCart[i].title;
    description.innerHTML = productsInCart[i].description;
    img.src = productsInCart[i].imgUrl;
    img.alt = productsInCart[i].title;
    price.innerHTML = productsInCart[i].price;
    category.innerHTML = productsInCart[i].category;
    color.innerHTML = productsInCart[i].color;

    productItem.appendChild(title);
    productItem.appendChild(description);
    productItem.appendChild(img);
    productItem.appendChild(price);
    productItem.appendChild(category);
    productItem.appendChild(color);

    container.appendChild(productItem);
  }
};
