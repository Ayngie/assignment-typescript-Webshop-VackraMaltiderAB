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

  //labels
  let labelsContainer = document.createElement("div");

  let titleLabel = document.createElement("label");
  let descriptionLabel = document.createElement("label");
  let imageLabel = document.createElement("label");
  let priceLabel = document.createElement("label");
  let quantityLabel = document.createElement("label");
  let subTotalLabel = document.createElement("label");

  labelsContainer.classList.add("labels");

  titleLabel.classList.add("product-title");
  descriptionLabel.classList.add("product-description");
  descriptionLabel.classList.add("product-description-label");
  imageLabel.classList.add("product-image");
  priceLabel.classList.add("product-price");
  quantityLabel.classList.add("product-quantity");
  subTotalLabel.classList.add("product-line-price");

  titleLabel.innerHTML = "Produktnamn";
  descriptionLabel.innerHTML = "Beskrivning";
  imageLabel.innerHTML = "Bild";
  priceLabel.innerHTML = "Pris";
  quantityLabel.innerHTML = "Antal";
  subTotalLabel.innerHTML = "Delsumma";

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
    // let category = document.createElement("p");
    // let color = document.createElement("p");
    let quantity = document.createElement("p");
    let productLinePrice = document.createElement("p");

    //ge variablerna värde/innehåll
    productItem.classList.add("product-item"); //klass för senare styling

    title.innerHTML = productsInCart[i].title;
    title.classList.add("product-title"); //klass för senare styling
    description.innerHTML = productsInCart[i].description;
    description.classList.add("product-description"); //klass för senare styling
    img.src = productsInCart[i].imgUrl;
    img.alt = productsInCart[i].title;
    img.classList.add("product-image"); //klass för senare styling
    price.innerHTML = productsInCart[i].price + " kr";
    price.classList.add("product-price"); //klass för senare styling
    // category.innerHTML = productsInCart[i].category;
    // category.classList.add("product-category"); //klass för senare styling
    // color.innerHTML = productsInCart[i].color;
    // color.classList.add("product-color"); //klass för senare styling
    quantity.innerHTML = productsInCart[i].quantity.toString();
    quantity.classList.add("product-quantity"); //klass för senare styling

    //productsInCart[i].calculateSubtotal();
    productLinePrice.innerHTML = "0 kr"; //OBS! BEHÖVER UPPDATERING för att visa aktuell delsumma
    productLinePrice.classList.add("product-line-price"); //klass för senare styling

    //lägga till i html
    productItem.appendChild(title);
    productItem.appendChild(description);
    productItem.appendChild(img);
    productItem.appendChild(price);
    // productItem.appendChild(category);
    // productItem.appendChild(color);
    productItem.appendChild(quantity);
    productItem.appendChild(productLinePrice);

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
