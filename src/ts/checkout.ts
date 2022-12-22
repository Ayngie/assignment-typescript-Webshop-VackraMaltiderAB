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
    "minKassaVarukorg"
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
  priceLabel.classList.add("product-price"); //klass för senare styling
  quantityLabel.classList.add("product-quantity"); //klass för senare styling
  subTotalLabel.classList.add("product-line-price"); //klass för senare styling

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

  //for-loop här:
};
