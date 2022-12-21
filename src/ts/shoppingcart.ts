import { Product } from "../ts/models/Product";

window.onload = function () {
  createHtml(productsInCart);
};

//hämta kundens lista av produkter från localstorage.
let productsInCart: Product[] = JSON.parse(
  localStorage.getItem("varukorg") || "[]"
);

//funktion för att visa upp varukorgen i html
const createHtml = (productsInCart: Product[]) => {
  let container: HTMLDivElement = document.getElementById(
    "varukorg-container"
  ) as HTMLDivElement; //hämta container för varukorgens produkter att läggas in i.

  container.innerHTML = ""; //rensa innehåll
  let labelsContainer = document.createElement("div");
  let titleLabel = document.createElement("label");
  let descriptionLabel = document.createElement("label");
  let imageLabel = document.createElement("label");
  let priceLabel = document.createElement("label");
  let quantityLabel = document.createElement("label");
  let subTotalLabel = document.createElement("label");

  titleLabel.innerHTML = "Produktnamn";
  titleLabel.classList.add("titleLabel");
  descriptionLabel.innerHTML = "Beskrivning";
  descriptionLabel.classList.add("descriptionLabel");
  imageLabel.innerHTML = "Bild";
  imageLabel.classList.add("imageLabel");
  priceLabel.innerHTML = "Pris";
  priceLabel.classList.add("priceLabel");
  quantityLabel.innerHTML = "Antal";
  quantityLabel.classList.add("quantityLabel");
  subTotalLabel.innerHTML = "Delsumma";
  subTotalLabel.classList.add("subTotalLabel");

  labelsContainer.appendChild(titleLabel);
  labelsContainer.appendChild(descriptionLabel);
  labelsContainer.appendChild(imageLabel);
  labelsContainer.appendChild(priceLabel);
  labelsContainer.appendChild(quantityLabel);
  labelsContainer.appendChild(subTotalLabel);

  container.appendChild(labelsContainer);

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
    title.classList.add("productTitle"); //klass för senare styling
    description.innerHTML = productsInCart[i].description;
    description.classList.add("productDescription"); //klass för senare styling
    img.src = productsInCart[i].imgUrl;
    img.alt = productsInCart[i].title;
    img.classList.add("productImg"); //klass för senare styling
    price.innerHTML = productsInCart[i].price;
    price.classList.add("productPrice"); //klass för senare styling
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

function calculateTotal() {
  let total = 0;
  for (let i = 0; i < productsInCart.length; i++) {
    total += Number(productsInCart[i].price);
  }
  return total;
}
